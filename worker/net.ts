// A tiny line-oriented TCP client on top of Cloudflare's connect() API,
// used by the SMTP and IMAP clients.
import { connect } from "cloudflare:sockets";
import { dec, enc } from "./util";

export class Conn {
  private socket: Socket;
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private buf = new Uint8Array(0);
  timeoutMs = 25000;

  constructor(host: string, port: number, tls: "on" | "starttls" | "off") {
    this.socket = connect({ hostname: host, port }, { secureTransport: tls, allowHalfOpen: false });
    this.reader = this.socket.readable.getReader();
    this.writer = this.socket.writable.getWriter();
  }

  private async fill(): Promise<void> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<never>((_, rej) => {
      timer = setTimeout(() => rej(new Error("Connection timed out")), this.timeoutMs);
    });
    try {
      const { value, done } = await Promise.race([this.reader.read(), timeout]);
      if (done || !value) throw new Error("Connection closed by server");
      const next = new Uint8Array(this.buf.length + value.length);
      next.set(this.buf);
      next.set(value, this.buf.length);
      this.buf = next;
    } finally {
      clearTimeout(timer);
    }
  }

  async readLine(): Promise<string> {
    for (;;) {
      const i = this.buf.indexOf(10);
      if (i >= 0) {
        const line = dec.decode(this.buf.subarray(0, i)).replace(/\r$/, "");
        this.buf = this.buf.slice(i + 1);
        return line;
      }
      await this.fill();
    }
  }

  async readBytes(n: number): Promise<Uint8Array> {
    while (this.buf.length < n) await this.fill();
    const out = this.buf.slice(0, n);
    this.buf = this.buf.slice(n);
    return out;
  }

  async write(s: string): Promise<void> {
    await this.writer.write(enc.encode(s));
  }

  async startTls(): Promise<void> {
    this.reader.releaseLock();
    this.writer.releaseLock();
    this.socket = this.socket.startTls();
    this.reader = this.socket.readable.getReader();
    this.writer = this.socket.writable.getWriter();
    this.buf = new Uint8Array(0);
  }

  async close(): Promise<void> {
    try {
      await this.socket.close();
    } catch {
      /* already closed */
    }
  }
}
