import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-gradient-to-r from-electric to-mint text-slate-950 hover:shadow-[0_16px_42px_rgba(68,245,203,0.24)]',
  secondary:
    'border border-white/10 bg-white/[0.05] text-white hover:border-cyan-300/20 hover:bg-white/[0.08]',
};

function DownloadButton({
  href,
  label,
  sublabel,
  icon: Icon,
  variant = 'primary',
  className = '',
  downloadName,
}) {
  return (
    <a
      href={href}
      download={downloadName ?? true}
      className={`group inline-flex items-center gap-4 rounded-[1.4rem] px-5 py-4 shadow-panel transition duration-300 hover:-translate-y-1 ${variants[variant]} ${className}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-slate-950/10 text-current">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-1 flex-col items-start leading-tight">
        <span className="text-[11px] uppercase tracking-[0.26em] opacity-70">
          {sublabel}
        </span>
        <span className="mt-1 text-base font-semibold">{label}</span>
      </span>
      <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export default DownloadButton;
