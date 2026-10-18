type AnalyticsEventParams = Record<string, string>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(
  eventName: string,
  parameters: AnalyticsEventParams,
) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", eventName, parameters);
  } catch {
    // Analytics failures must not interrupt the user's action.
  }
}
