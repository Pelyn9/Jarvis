function PreviewCard({ eyebrow, title, children }) {
  return (
    <div className="glass-panel group h-full rounded-[2rem] p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
        {eyebrow}
      </p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-white">
        {title}
      </h3>
      <div className="mt-6 h-[320px]">{children}</div>
    </div>
  );
}

export default PreviewCard;
