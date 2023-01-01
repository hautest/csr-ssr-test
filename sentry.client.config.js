import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://67c3396b96af43908d4c8ed0b002bbbd@o4504428794544128.ingest.sentry.io/4504428798410752",
  tracesSampleRate: 1.0,
});
