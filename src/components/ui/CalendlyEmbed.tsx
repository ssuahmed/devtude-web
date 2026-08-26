type CalendlyEmbedProps = {
  url: string;
};

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const src = new URL(url);
  src.searchParams.set("hide_gdpr_banner", "1");
  src.searchParams.set("background_color", "f7f8ff");
  src.searchParams.set("text_color", "1a1c22");
  src.searchParams.set("primary_color", "5254fe");

  return (
    <iframe
      src={src.toString()}
      title="Schedule a call with Devtude"
      className="h-[720px] w-full border-0"
    />
  );
}
