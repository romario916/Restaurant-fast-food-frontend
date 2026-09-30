interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionTitle = ({
  eyebrow,
  title,
  description,
  light = false,
}: SectionTitleProps) => {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-sm font-black uppercase tracking-[0.2em] ${
            light ? "text-orange-400" : "text-orange-600"
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;