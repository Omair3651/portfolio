export function AuroraBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Cyan blob — top right */}
      <div
        className="aurora-blob absolute -top-40 -right-32 w-[700px] h-[700px] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,1) 0%, transparent 70%)",
          animation: "aurora-1 28s ease-in-out infinite",
          opacity: 0.12,
        }}
      />
      {/* Blue blob — center left */}
      <div
        className="aurora-blob absolute top-1/3 -left-20 w-[500px] h-[500px] rounded-full blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,1) 0%, transparent 70%)",
          animation: "aurora-2 35s ease-in-out infinite",
          opacity: 0.08,
        }}
      />
      {/* Purple blob — bottom center */}
      <div
        className="aurora-blob absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,1) 0%, transparent 70%)",
          animation: "aurora-3 22s ease-in-out infinite",
          opacity: 0.10,
        }}
      />
    </div>
  );
}
