import { MessageCircle, LifeBuoy } from "lucide-react";
import { useEffect, useState } from "react";

const DISCORD_URL = "https://discord.gg/hQP6ybWCHe";

export const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  // Pulse hint after a few seconds
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const openMava = () => {
    // Try several known Mava widget triggers
    const w = window as any;
    try {
      if (w.Mava?.open) return w.Mava.open();
      if (w.mava?.open) return w.mava.open();
      if (w.MavaWebChat?.open) return w.MavaWebChat.open();
    } catch {}
    // Fallback: click the widget iframe button if present
    const btn = document.querySelector<HTMLElement>(
      'iframe[src*="mava"], [id^="mava"], [class*="mava"]'
    );
    if (btn) (btn as HTMLElement).click();
  };

  return (
    <>
      {/* Discord — bottom left, big & bouncy */}
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-5 left-5 z-[60] flex items-center gap-3"
        aria-label="Discord beitreten"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-2xl bg-[#5865F2] blur-xl opacity-60 animate-pulse-glow" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5865F2] border-4 border-[hsl(220_40%_15%)] shadow-[6px_6px_0_0_hsl(220_40%_15%)] transition-transform group-hover:-translate-y-1 group-hover:rotate-[-4deg] animate-float">
            {/* Discord icon */}
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
              <path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.07.07 0 0 0-.075.035c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.073.073 0 0 0-.075-.034 19.736 19.736 0 0 0-4.885 1.515.066.066 0 0 0-.03.027C.533 9.045-.32 13.579.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.027 14.2 14.2 0 0 0 1.226-1.994.075.075 0 0 0-.041-.104 13.13 13.13 0 0 1-1.872-.892.075.075 0 0 1-.008-.125c.126-.094.252-.192.372-.291a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.099.246.198.373.292a.075.075 0 0 1-.006.125 12.32 12.32 0 0 1-1.873.891.075.075 0 0 0-.04.105 15.97 15.97 0 0 0 1.225 1.993.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.075.075 0 0 0 .031-.055c.5-5.177-.838-9.673-3.549-13.66a.06.06 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </div>
        </div>
        {open && (
          <div className="hidden sm:block relative animate-rise">
            <div className="rounded-xl bg-white border-4 border-[hsl(220_40%_15%)] px-3 py-2 shadow-[4px_4px_0_0_hsl(220_40%_15%)]">
              <p className="font-pixel text-[10px] uppercase text-[#5865F2]">Discord</p>
              <p className="text-xs font-bold text-[hsl(220_40%_15%)]">Komm in unsere Community!</p>
            </div>
          </div>
        )}
      </a>

      {/* Mava Support — bottom right, big & bouncy */}
      <button
        onClick={openMava}
        className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3"
        aria-label="Hilfe & Support öffnen"
      >
        {open && (
          <div className="hidden sm:block relative animate-rise">
            <div className="rounded-xl bg-white border-4 border-[hsl(220_40%_15%)] px-3 py-2 shadow-[4px_4px_0_0_hsl(220_40%_15%)]">
              <p className="font-pixel text-[10px] uppercase text-[hsl(var(--brand-mint))]">Hilfe?</p>
              <p className="text-xs font-bold text-[hsl(220_40%_15%)]">Frag uns alles! 💬</p>
            </div>
          </div>
        )}
        <div className="relative">
          <span className="absolute inset-0 rounded-2xl bg-[hsl(var(--brand-mint))] blur-xl opacity-60 animate-pulse-glow" />
          <span className="absolute -top-1 -right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--brand-redstone))] border-2 border-white text-[10px] font-bold text-white animate-wiggle">
            !
          </span>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand border-4 border-[hsl(220_40%_15%)] shadow-[6px_6px_0_0_hsl(220_40%_15%)] transition-transform group-hover:-translate-y-1 group-hover:rotate-[4deg] animate-float" style={{ animationDelay: "0.6s" }}>
            <LifeBuoy className="h-8 w-8 text-white" strokeWidth={2.5} />
          </div>
        </div>
      </button>
    </>
  );
};
