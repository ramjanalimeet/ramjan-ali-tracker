import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// `npm run build` runs the OpenNext build, so OpenNext must call plain
// `next build` through a different script, or it would call itself forever.
config.buildCommand = "npm run build:next";

export default config;
