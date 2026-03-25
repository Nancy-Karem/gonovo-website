export const GOOGLE_ADS_ID = "AW-18038010546";

export const GOOGLE_ADS_LEAD_FORM_SEND_TO =
  "AW-18038010546/kEo9COCKvY8cELLlmJlD";

export function fireLeadFormConversion(): void {
  if (typeof window === "undefined") return;
  const gtag = (
    window as Window & { gtag?: (...args: unknown[]) => void }
  ).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_LEAD_FORM_SEND_TO,
  });
}
