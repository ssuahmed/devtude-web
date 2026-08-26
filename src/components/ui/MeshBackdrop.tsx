import BrandMark from "@/components/brand/BrandMark";

export default function MeshBackdrop({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  if (variant === "dark") {
    return (
      <div className="mesh" aria-hidden="true">
        <div className="mesh-blob mesh-blob-dark-a" />
        <div className="mesh-blob mesh-blob-dark-b" />
        <div className="mark-field mark-field-dark">
          <BrandMark className="mark-inner h-auto w-full text-inverse-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="mesh" aria-hidden="true">
      <div className="mesh-blob mesh-blob-a" />
      <div className="mesh-blob mesh-blob-b" />
      <div className="mesh-blob mesh-blob-c" />
      <div className="mark-field mark-field-listen">
        <BrandMark className="mark-inner h-auto w-full text-primary" />
      </div>
      <div className="mark-field mark-field-reply">
        <BrandMark className="mark-inner h-auto w-full text-secondary" />
      </div>
      <div className="mark-field mark-field-echo">
        <BrandMark className="mark-inner h-auto w-full text-tertiary" />
      </div>
    </div>
  );
}
