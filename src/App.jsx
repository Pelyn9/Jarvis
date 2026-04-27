import { useEffect, useState } from 'react';
import {
  Bot,
  BrainCircuit,
  Braces,
  Bug,
  CheckCircle2,
  Command,
  Cpu,
  Download,
  Github,
  BookOpen,
  LayoutTemplate,
  Lock,
  Mail,
  Mic,
  Monitor,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TerminalSquare,
  Zap,
} from 'lucide-react';
import DownloadButton from './components/DownloadButton';
import FeatureCard from './components/FeatureCard';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import PreviewCard from './components/PreviewCard';
import Reveal from './components/Reveal';
import SectionHeading from './components/SectionHeading';

const downloadTargets = {
  windows: {
    href: '/downloads/README.txt',
    label: 'Download for Windows',
    sublabel: 'Windows .exe',
    version: 'v1.2.0',
    size: '9+ GB',
    platform: 'Windows 10/11',
    note: 'JARVIS CODE AI powered by Ollama - Build instructions included. Full exe coming soon!',
    icon: Monitor,
  },
  android: {
    href: '/downloads/README.txt',
    label: 'Download APK',
    sublabel: 'Android APK',
    version: 'v1.2.0',
    size: '5+ GB',
    platform: 'Android 10+',
    note: 'JARVIS CODE AI for Android - Coming soon!',
    icon: Smartphone,
  },
};

const featureList = [
  {
    icon: Cpu,
    title: 'Offline AI Coding',
    description:
      'Generate, refactor, and understand code with local intelligence that keeps prompts and project context off the cloud.',
  },
  {
    icon: Command,
    title: 'Auto Code Editing',
    description:
      'Turn natural-language instructions into concrete file changes, boilerplate generation, and project-wide cleanup.',
  },
  {
    icon: Bug,
    title: 'Smart Debugging',
    description:
      'Trace failures, inspect logic paths, and propose precise fixes without waiting on an internet-backed assistant.',
  },
  {
    icon: LayoutTemplate,
    title: 'UI/UX Generator',
    description:
      'Create polished React-based interfaces, layouts, and component patterns directly from product intent.',
  },
  {
    icon: Mic,
    title: 'Voice Command Support',
    description:
      'Drive the assistant hands-free with voice prompts for faster prototyping, navigation, and bug-fix flows.',
  },
  {
    icon: Braces,
    title: 'Multi-language Coding',
    description:
      'Work across frontend, backend, scripts, and automation with context-aware support for modern dev stacks.',
  },
  {
    icon: BrainCircuit,
    title: 'Local Learning System',
    description:
      'Adapt to your project conventions, file structure, and workflows over time while staying fully private.',
  },
];

const workflowSteps = [
  {
    icon: Download,
    title: 'Install the software',
    description:
      'Download JARVIS with all Ollama AI models included (~9GB). No internet required after installation.',
  },
  {
    icon: TerminalSquare,
    title: 'Run inside Visual Studio Code',
    description:
      'Launch JARVIS directly from your coding environment so prompts, edits, and previews stay in your workflow.',
  },
  {
    icon: Mic,
    title: 'Give commands by text or voice',
    description:
      'Describe a feature, ask for a fix, or request a UI generation sequence using the input style you prefer.',
  },
  {
    icon: Sparkles,
    title: 'AI builds and edits your project',
    description:
      'JARVIS uses local Ollama models to write files, propose design systems, and patch bugs while staying fully private.',
  },
];

const trustPillars = [
  {
    icon: Lock,
    title: 'Powered by Ollama',
    description:
      'JARVIS runs entirely on Ollama\'s local AI models. Your code, prompts, and data never leave your machine.',
  },
  {
    icon: Zap,
    title: '9+ GB of AI Models',
    description:
      'All popular Ollama models included: Llama 3, Mistral, Codellama, and more. Zero cloud dependency after install.',
  },
  {
    icon: ShieldCheck,
    title: 'Full control',
    description:
      'Choose when the assistant edits files, how it integrates with your stack, and how the local models evolve.',
  },
];

const statTiles = [
  { value: '9+ GB', label: 'Local AI Models Included' },
  { value: 'Text + Voice', label: 'Command input modes' },
  { value: 'Windows + Android', label: 'Launch platforms' },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1450);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-ink">
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar
          primaryHref={downloadTargets.windows.href}
          primaryDownloadName="Jarvis-1.2.0-portable.exe"
        />
        <main>
          <section id="top" className="section-padding pt-8 md:pt-12">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <Reveal>
                  <div className="eyebrow">
                    <Bot className="h-4 w-4 text-electric" />
                    Local-first AI runtime
                  </div>
                </Reveal>
                <Reveal delay={90}>
                  <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl xl:text-7xl">
                    Your Offline AI Coding Assistant
                  </h1>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                    Code, Debug, and Build Apps — Even Without Internet.
                    JARVIS CODE AI keeps generation, debugging, React UI
                    creation, and voice-driven workflows running locally with
                    the speed and privacy developers actually need.
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <DownloadButton
                      href={downloadTargets.windows.href}
                      label={downloadTargets.windows.label}
                      sublabel={downloadTargets.windows.sublabel}
                      icon={downloadTargets.windows.icon}
                      downloadName="Jarvis-1.2.0-portable.exe"
                    />
                    <DownloadButton
                      href={downloadTargets.android.href}
                      label={downloadTargets.android.label}
                      sublabel={downloadTargets.android.sublabel}
                      icon={downloadTargets.android.icon}
                      downloadName="Jarvis-1.2.0.apk"
                      variant="secondary"
                    />
                  </div>
                </Reveal>
                <Reveal delay={340}>
                  <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
                    <StatusChip label="9+ GB of local AI models" />
                    <StatusChip label="Voice command ready" />
                    <StatusChip label="React UI generation" />
                    <StatusChip label="Ollama powered" />
                  </div>
                </Reveal>
                <Reveal delay={420}>
                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {statTiles.map((item) => (
                      <div
                        key={item.label}
                        className="glass-panel rounded-3xl p-5"
                      >
                        <p className="text-base font-semibold text-white">
                          {item.value}
                        </p>
                        <p className="mt-2 text-sm text-slate-400">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={180} className="lg:justify-self-end">
                <HeroShowcase />
              </Reveal>
            </div>
          </section>

          <section id="features" className="section-padding">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <SectionHeading
                  eyebrow="Core Features"
                  title="An offline assistant that feels launch-ready, not stripped down"
                  description="Everything in the experience is aimed at turning private local inference into a productive developer workflow."
                />
              </Reveal>
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featureList.map((feature, index) => (
                  <Reveal key={feature.title} delay={index * 70}>
                    <FeatureCard {...feature} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="workflow" className="section-padding">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <SectionHeading
                  eyebrow="How It Works"
                  title="From install to local execution in four steps"
                  description="JARVIS stays inside your daily coding loop, so you can prompt, inspect, and ship without leaving your machine."
                  align="left"
                />
                <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <ShieldCheck className="h-5 w-5 text-mint" />
                    Safe & secure local-first workflow
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    No mandatory sign-in, no always-on cloud loop, and no
                    remote dependency for the core coding experience.
                  </p>
                </div>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2">
                {workflowSteps.map((step, index) => (
                  <Reveal key={step.title} delay={index * 90}>
                    <StepCard
                      index={index + 1}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section id="downloads" className="section-padding">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <SectionHeading
                  eyebrow="Downloads"
                  title="Package the local assistant for desktop and mobile"
                  description="Download targets below use placeholder files today, but the layout is wired for real release assets and versioning."
                />
              </Reveal>
              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <Reveal delay={70}>
                  <DownloadCard {...downloadTargets.windows} />
                </Reveal>
                <Reveal delay={140}>
                  <DownloadCard {...downloadTargets.android} />
                </Reveal>
              </div>
              <Reveal delay={210}>
                <div className="mt-8 flex items-center gap-3 rounded-3xl border border-emerald-400/20 bg-emerald-400/8 px-5 py-4 text-sm text-emerald-100">
                  <CheckCircle2 className="h-5 w-5 text-mint" />
                  Includes Ollama runtime with Llama 3, Mistral, Codellama, and 10+ more models. 9+ GB total download size.
                </div>
              </Reveal>
            </div>
          </section>

          <section id="preview" className="section-padding">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <SectionHeading
                  eyebrow="Preview"
                  title="UI mockups that sell the product before the first install"
                  description="The preview section simulates the core surfaces a buyer expects to see: VS Code integration, an AI console, and generated UI output."
                />
              </Reveal>
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                <Reveal delay={60}>
                  <PreviewCard
                    eyebrow="VS Code Integration"
                    title="In-editor workspace control"
                  >
                    <div className="mockup-window h-full">
                      <div className="mockup-topbar">
                        <div className="mockup-dots">
                          <span />
                          <span />
                          <span />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.26em] text-slate-400">
                          jarvis-workspace.code-workspace
                        </span>
                      </div>
                      <div className="mt-4 grid flex-1 grid-cols-[72px_1fr] gap-4">
                        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                          <div className="space-y-3">
                            <div className="h-9 rounded-xl bg-electric/10" />
                            <div className="h-9 rounded-xl bg-white/5" />
                            <div className="h-9 rounded-xl bg-white/5" />
                          </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                          <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                            <span>App.jsx</span>
                            <span>Offline mode active</span>
                          </div>
                          <div className="space-y-3">
                            <CodeLine number="12" width="84%" />
                            <CodeLine number="13" width="61%" tone="cyan" />
                            <CodeLine number="14" width="74%" />
                            <CodeLine number="15" width="48%" tone="mint" />
                            <CodeLine number="16" width="92%" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </PreviewCard>
                </Reveal>

                <Reveal delay={120}>
                  <PreviewCard
                    eyebrow="Assistant Panel"
                    title="Prompt, inspect, iterate"
                  >
                    <div className="mockup-window">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            JARVIS Console
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            Listening for text or voice instructions
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
                          <span className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                          Local model online
                        </div>
                      </div>
                      <div className="mt-5 space-y-4">
                        <Bubble
                          label="You"
                          text="Generate a premium pricing section for the landing page."
                        />
                        <Bubble
                          label="JARVIS"
                          text="Created React layout, added CTA hierarchy, and applied glassmorphism with responsive spacing."
                          highlight
                        />
                        <div className="flex flex-wrap gap-3">
                          <Tag label="Patch files" />
                          <Tag label="Open preview" />
                          <Tag label="Explain changes" />
                        </div>
                      </div>
                    </div>
                  </PreviewCard>
                </Reveal>

                <Reveal delay={180}>
                  <PreviewCard
                    eyebrow="Generated UI"
                    title="React-ready design output"
                  >
                    <div className="mockup-window">
                      <div className="grid gap-4">
                        <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/12 to-transparent p-4">
                          <div className="h-28 rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(85,243,255,0.18),_transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
                          <div className="mt-4 space-y-3">
                            <div className="h-3 w-5/6 rounded-full bg-white/70" />
                            <div className="h-3 w-2/3 rounded-full bg-white/25" />
                          </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <MiniPanel />
                          <MiniPanel />
                        </div>
                      </div>
                    </div>
                  </PreviewCard>
                </Reveal>
              </div>
            </div>
          </section>

          <section id="about" className="section-padding">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <Reveal>
                <SectionHeading
                  eyebrow="About The Project"
                  title="Built for developers who want privacy, speed, and full control"
                  description="JARVIS CODE AI is an offline-first AI system designed for developers who want modern coding assistance without relying on cloud APIs. It keeps execution local, accelerates iteration, and gives teams tighter control over how AI touches their codebase."
                  align="left"
                />
              </Reveal>
              <div className="grid gap-5 md:grid-cols-3">
                {trustPillars.map((pillar, index) => (
                  <Reveal key={pillar.title} delay={index * 90}>
                    <AboutCard {...pillar} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">
                JARVIS CODE AI
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Offline Coding Assistant by PEEJAY MARCO APALE
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <FooterLink
                href="https://github.com/yourusername/jarvis-code-ai"
                icon={Github}
                label="GitHub"
              />
              <FooterLink
                href="https://your-docs-url.example.com/jarvis-code-ai"
                icon={BookOpen}
                label="Documentation"
              />
              <FooterLink
                href="mailto:contact@jarviscode.ai"
                icon={Mail}
                label="Contact"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="grid-overlay" />
      <div className="orb orb-cyan left-[8%] top-[10%] h-56 w-56" />
      <div className="orb orb-mint right-[10%] top-[18%] h-72 w-72 animation-delay-700" />
      <div className="orb orb-blue bottom-[8%] left-[36%] h-80 w-80 animation-delay-1400" />
    </div>
  );
}

function HeroShowcase() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute -left-6 top-8 hidden w-44 rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-glow backdrop-blur-xl xl:block floating-card">
        <div className="flex items-center gap-3 text-sm text-white">
          <Mic className="h-4 w-4 text-electric" />
          Voice command ready
        </div>
        <p className="mt-3 text-xs leading-6 text-slate-400">
          "Refactor the hero CTA and generate a React download section."
        </p>
      </div>

      <div className="absolute -right-3 bottom-10 w-48 rounded-3xl border border-white/10 bg-slate-950/75 p-4 shadow-glow backdrop-blur-xl floating-card-delayed">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-100">
          <span className="h-2 w-2 rounded-full bg-mint" />
          Offline model active
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Local context synced. Ready to patch files, generate UI, and debug.
        </p>
      </div>

      <div className="glass-panel neon-panel relative overflow-hidden rounded-[2rem] p-4 shadow-glow">
        <div className="scan-line" />
        <div className="rounded-[1.55rem] border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                JARVIS CORE
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
              <Cpu className="h-3.5 w-3.5" />
              Local inference
            </div>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[78px_1fr]">
            <div className="hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-3 xl:block">
              <div className="space-y-3">
                <SidebarPill active />
                <SidebarPill />
                <SidebarPill />
                <SidebarPill />
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                  <span>src/App.jsx</span>
                  <span>Patch preview</span>
                </div>
                <div className="space-y-3">
                  <CodeLine number="18" width="88%" />
                  <CodeLine number="19" width="57%" tone="cyan" />
                  <CodeLine number="20" width="72%" />
                  <CodeLine number="21" width="64%" tone="mint" />
                  <CodeLine number="22" width="91%" />
                  <CodeLine number="23" width="43%" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <TerminalSquare className="h-4 w-4 text-electric" />
                    Command Queue
                  </div>
                  <div className="mt-4 space-y-2">
                    <QueuePill label="Generate landing section" />
                    <QueuePill label="Debug sidebar layout" />
                    <QueuePill label="Export Android build" />
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Sparkles className="h-4 w-4 text-mint" />
                    UI Preview
                  </div>
                  <div className="mt-4 grid gap-3">
                    <div className="h-16 rounded-2xl border border-cyan-400/15 bg-gradient-to-r from-cyan-400/14 to-transparent" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-10 rounded-xl bg-white/[0.06]" />
                      <div className="h-10 rounded-xl bg-white/[0.04]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarPill({ active = false }) {
  return (
    <div
      className={`h-11 rounded-2xl ${
        active
          ? 'border border-cyan-400/20 bg-cyan-400/12'
          : 'border border-white/10 bg-white/[0.03]'
      }`}
    />
  );
}

function StatusChip({ label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(68,245,203,0.75)]" />
      {label}
    </div>
  );
}

function StepCard({ index, icon: Icon, title, description }) {
  return (
    <div className="glass-panel rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/12">
          <Icon className="h-6 w-6 text-electric" />
        </div>
        <span className="text-sm font-medium text-slate-500">
          0{index}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function DownloadCard({
  href,
  label,
  sublabel,
  version,
  size,
  platform,
  note,
  icon: Icon,
}) {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 shadow-glow">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent" />
      <div className="flex items-start justify-between gap-5">
        <div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10">
            <Icon className="h-6 w-6 text-electric" />
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold text-white">
            {sublabel}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            {note}
          </p>
        </div>
        <div className="hidden rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-right lg:block">
          <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
            Release
          </p>
          <p className="mt-2 text-lg font-semibold text-white">{version}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <MetaCard label="Version" value={version} />
        <MetaCard label="File Size" value={size} />
        <MetaCard label="Platform" value={platform} />
      </div>
      <div className="mt-8">
        <DownloadButton
          href={href}
          label={label}
          sublabel="Safe & secure"
          icon={Icon}
          downloadName={href.split('/').at(-1)}
          className="w-full justify-between"
        />
      </div>
    </div>
  );
}

function MetaCard({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/50 px-4 py-4">
      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-white">{value}</p>
    </div>
  );
}

function CodeLine({ number, width, tone = 'default' }) {
  const lineTone =
    tone === 'cyan'
      ? 'bg-cyan-300/65'
      : tone === 'mint'
        ? 'bg-emerald-300/65'
        : 'bg-white/35';

  return (
    <div className="flex items-center gap-3">
      <span className="w-6 text-right text-[10px] uppercase tracking-[0.12em] text-slate-500">
        {number}
      </span>
      <div className="h-2.5 flex-1 rounded-full bg-white/[0.04]">
        <div
          className={`h-full rounded-full ${lineTone}`}
          style={{ width }}
        />
      </div>
    </div>
  );
}

function QueuePill({ label }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
      {label}
    </div>
  );
}

function Bubble({ label, text, highlight = false }) {
  return (
    <div
      className={`rounded-[1.4rem] border px-4 py-4 ${
        highlight
          ? 'border-cyan-400/15 bg-cyan-400/10'
          : 'border-white/10 bg-white/[0.04]'
      }`}
    >
      <p className="text-xs uppercase tracking-[0.26em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-200">{text}</p>
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300">
      {label}
    </span>
  );
}

function MiniPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
      <div className="h-14 rounded-xl bg-white/[0.05]" />
      <div className="mt-3 space-y-2">
        <div className="h-2.5 w-4/5 rounded-full bg-white/35" />
        <div className="h-2.5 w-3/5 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

function AboutCard({ icon: Icon, title, description }) {
  return (
    <div className="glass-panel rounded-[2rem] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10">
        <Icon className="h-5 w-5 text-electric" />
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function FooterLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"
    >
      <Icon className="h-4 w-4 text-electric" />
      {label}
    </a>
  );
}

export default App;
