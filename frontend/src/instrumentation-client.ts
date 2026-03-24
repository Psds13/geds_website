// This file is used by Next.js as a client-side entry point for instrumentation.
// All client-side Sentry configuration should be in sentry.client.config.ts.
import * as Sentry from "@sentry/nextjs";

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

export {};
