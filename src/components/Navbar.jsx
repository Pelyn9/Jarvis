import DownloadButton from './DownloadButton';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'How It Works' },
  { href: '#downloads', label: 'Download' },
  { href: '#preview', label: 'Preview' },
  { href: '#about', label: 'About' },
];

function Navbar({ primaryHref, primaryDownloadName }) {
  return (
    <header className="sticky top-0 z-40 px-6 pt-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 shadow-panel backdrop-blur-2xl">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/12 text-sm font-semibold text-electric">
            J
          </div>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-white">
              JARVIS CODE AI
            </p>
            <p className="text-xs text-slate-400">Offline Coding Assistant</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DownloadButton
            href={primaryHref}
            label="Windows"
            sublabel="Get build"
            icon={() => (
              <span className="text-sm font-bold tracking-[0.16em]">EXE</span>
            )}
            downloadName={primaryDownloadName}
            variant="secondary"
            className="!gap-3 !px-4 !py-3"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
