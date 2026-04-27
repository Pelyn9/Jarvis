import { Bot } from 'lucide-react';

function LoadingScreen() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight px-6">
      <div className="grid-overlay" />
      <div className="orb orb-cyan left-[18%] top-[18%] h-52 w-52" />
      <div className="orb orb-mint right-[16%] top-[24%] h-64 w-64 animation-delay-700" />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center gap-8 text-center">
        <div className="eyebrow">
          <Bot className="h-4 w-4 text-electric" />
          Initializing offline core
        </div>

        <div className="relative h-36 w-36">
          <div className="loading-ring absolute inset-0 animate-pulse" />
          <div className="loading-core" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Bot className="relative z-10 h-10 w-10 text-electric" />
          </div>
        </div>

        <div className="w-full">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
            JARVIS CODE AI
          </p>
          <p className="mt-3 text-base text-slate-300">
            Preparing local models, voice hooks, and code workspace context.
          </p>
          <div className="loading-progress relative mt-6 h-1.5 overflow-hidden rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
