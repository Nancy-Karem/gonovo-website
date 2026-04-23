import Link from "next/link";

export default function NotFound() {
  return (
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
        <p
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#101828",
            margin: 0,
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "#101828",
            marginTop: 16,
            marginBottom: 0,
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            marginTop: 12,
            color: "#475467",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/en"
          style={{
            display: "inline-block",
            marginTop: 24,
            background: "#4541F1",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 999,
            padding: "12px 20px",
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
