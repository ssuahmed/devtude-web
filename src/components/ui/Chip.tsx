export default function Chip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-surface-container-lowest/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-on-surface-variant shadow-md3 ring-1 ring-outline-variant/60 backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}
