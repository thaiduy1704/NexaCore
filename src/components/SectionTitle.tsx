interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`!mx-auto mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl !mx-auto">{subtitle}</p>}
    </div>
  );
}
