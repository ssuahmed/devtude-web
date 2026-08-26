export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="t-ticker">
      <div className="t-ticker__track">
        {[...items, ...items].map((item, i) => (
          <span className="t-ticker__chip" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
