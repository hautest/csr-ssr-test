import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e55490d0a89045c895dd814bf6e6f7a9@o4504428794544128.ingest.sentry.io/4504428848218112",
  tracesSampleRate: 1.0,
});
