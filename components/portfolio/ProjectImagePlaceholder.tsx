export default function ProjectImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="font-mono"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 16,
        gap: 6,
        border: "1px dashed rgba(242,239,233,.24)",
        color: "#7E7A74",
        fontSize: 12,
        lineHeight: 1.5,
      }}
    >
      {label}
    </div>
  );
}
