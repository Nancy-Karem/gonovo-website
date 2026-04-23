"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            background: "linear-gradient(135deg,#EEF2FF 0%,#F3E8FF 100%)",
          }}
        >
          <div
            style={{
              maxWidth: 420,
              width: "100%",
              background: "#fff",
              borderRadius: 16,
              padding: 32,
              boxShadow: "0 20px 40px -20px rgba(16,24,40,0.25)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#101828",
                margin: 0,
              }}
            >
              Something went wrong
            </h1>
            <p
              style={{
                marginTop: 12,
                color: "#475467",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              An unexpected error occurred. Please try again.
            </p>
            <button
              onClick={reset}
              style={{
                marginTop: 24,
                background: "#4541F1",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "12px 20px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
