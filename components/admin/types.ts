export interface Account {
  id: string;
  kind: "email" | "social";
  platform: string;
  label: string;
  config: Record<string, string | number | undefined>;
  secretsSet: string[];
  status: string;
  last_error: string | null;
  sentToday: number;
}

export interface PostResult {
  ok: boolean;
  id?: string;
  url?: string;
  error?: string;
  platform?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  image_url: string;
  account_ids: string[];
  scheduled_at: number;
  status: "draft" | "scheduled" | "published" | "partial" | "failed";
  results: Record<string, PostResult>;
  created_at: number;
}

export interface Contact {
  id: string;
  email: string;
  name: string;
  company: string;
  website: string;
  phone: string;
  source: string;
  status: string;
  notes: string;
  created_at: number;
}

export interface Step {
  delayDays: number;
  subject: string;
  body: string;
}

export interface Campaign {
  id: string;
  name: string;
  steps: Step[];
  accountIds: string[];
  dailyLimit: number;
  status: "draft" | "active" | "paused";
  autoSources: string[];
  startHour: number;
  endHour: number;
  weekdaysOnly: boolean;
  createdAt: number;
  stats: Record<string, number>;
}

export interface Message {
  id: string;
  direction: "in" | "out";
  channel: string;
  account_id: string;
  contact_id: string;
  campaign_id: string;
  from_addr: string;
  from_name: string;
  to_addr: string;
  subject: string;
  body: string;
  url: string;
  meta: string;
  read: number;
  created_at: number;
  contact_name?: string;
  contact_company?: string;
}

export interface Booking {
  id: string;
  title: string;
  start_at: number;
  end_at: number;
  name: string;
  email: string;
  status: string;
  notes?: string;
  meeting_url: string;
}

export interface Overview {
  unread: number;
  sentToday: number;
  sentWeek: number;
  repliesWeek: number;
  scheduledPosts: number;
  publishedWeek: number;
  contacts: number;
  activeSequences: number;
  leadsWeek: number;
  upcomingBookings: Booking[];
  upcomingPosts: Post[];
  recentInbox: Message[];
  accounts: Pick<Account, "id" | "kind" | "platform" | "label" | "status">[];
  daily: { day: number; direction: "in" | "out"; n: number }[];
  activity: { id: number; level: string; text: string; created_at: number }[];
}

export interface Settings {
  timezone: string;
  anthropicKeySet: boolean;
  calSecretSet: boolean;
  passwordFromEnv: boolean;
  calWebhookUrl: string;
  leadEndpoint: string;
  unsubscribeLine: string;
}

export type View = "overview" | "inbox" | "calendar" | "social" | "email" | "contacts";
