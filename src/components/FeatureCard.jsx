function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="glass-panel group h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.06]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10">
        <Icon className="h-6 w-6 text-electric" />
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
}

export default FeatureCard;
