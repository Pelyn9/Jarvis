function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}) {
  const alignment =
    align === 'left'
      ? 'mx-0 items-start text-left'
      : 'mx-auto items-center text-center';

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
