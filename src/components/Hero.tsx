import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Sparkles, ShieldCheck, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Bright sky background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-sky" />
        <img
          src="/hero-world.jpg"
          alt="Minecraft Welt mit schwebenden Inseln"
          className="h-full w-full object-cover opacity-50 mix-blend-multiply"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </div>

      {/* Floating real Minecraft blocks - decorative */}
      <img
        src="/mc/grass.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-32 right-[8%] w-24 sm:w-32 animate-float pixelated drop-shadow-2xl"
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/diamond-ore.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-44 right-[18%] w-20 sm:w-28 animate-float-slow pixelated drop-shadow-2xl"
        style={{ animationDelay: "1s" }}
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/creeper.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[3%] w-16 sm:w-24 animate-wiggle pixelated drop-shadow-xl hidden md:block"
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/pickaxe.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-32 right-[36%] w-14 sm:w-20 animate-float pixelated hidden lg:block"
        style={{ animationDelay: "2s", transform: "rotate(-20deg)" }}
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/tnt.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-40 left-[5%] w-16 sm:w-20 animate-float-slow pixelated drop-shadow-xl hidden lg:block"
        style={{ animationDelay: "0.5s" }}
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/gold.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-52 left-[8%] w-12 animate-float pixelated hidden lg:block"
        style={{ animationDelay: "1.5s" }}
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/sword.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-[3%] w-14 sm:w-20 animate-float pixelated drop-shadow-xl hidden md:block"
        style={{ animationDelay: "2.5s", transform: "rotate(25deg)" }}
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/apple.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-[58%] left-[12%] w-10 sm:w-14 animate-float-slow pixelated hidden md:block"
        style={{ animationDelay: "3s" }}
        loading="lazy"
        width={64}
        height={64}
      />
      <img
        src="/mc/emerald.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-[18%] right-[28%] w-10 sm:w-12 animate-float pixelated drop-shadow-xl"
        style={{ animationDelay: "1.8s" }}
        loading="lazy"
        width={64}
        height={64}
      />
      <img
        src="/mc/ender-pearl.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-[70%] right-[44%] w-10 sm:w-12 animate-float-slow pixelated hidden md:block"
        style={{ animationDelay: "2.2s" }}
        loading="lazy"
        width={64}
        height={64}
      />
      <img
        src="/mc/creeper-render.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-[5%] w-20 sm:w-28 animate-wiggle drop-shadow-2xl hidden md:block"
        loading="lazy"
        width={200}
        height={200}
      />
      <img
        src="/mc/pig-head.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-[42%] w-16 sm:w-20 animate-float pixelated hidden lg:block"
        style={{ animationDelay: "1.2s" }}
        loading="lazy"
        width={160}
        height={160}
      />
      <img
        src="/mc/villager-head.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-24 left-[32%] w-14 sm:w-18 animate-float-slow pixelated hidden lg:block"
        style={{ animationDelay: "2.8s" }}
        loading="lazy"
        width={160}
        height={160}
      />

      <div className="container relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-white/90 backdrop-blur px-4 py-1.5 text-xs font-medium text-foreground animate-rise shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-pixel text-[9px]">SERVER IN VORBEREITUNG · BETA</span>
          </div>

          <div className="mt-6 flex items-center gap-5 animate-rise" style={{ animationDelay: "60ms" }}>
            <Logo size={84} className="rounded-2xl shadow-glow animate-float" />
            <div className="hidden sm:block h-16 w-px bg-border" />
            <div className="hidden sm:block">
              <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-primary">
                Pädagogischer Server
              </p>
              <p className="font-display text-lg text-foreground">
                Schul Minecraft Network
              </p>
            </div>
          </div>

          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-rise" style={{ animationDelay: "120ms" }}>
            Unser <span className="text-gradient-brand">Minecraft</span> für{" "}
            unsere <span className="text-gradient-rainbow">Schule</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-foreground/80 leading-relaxed animate-rise" style={{ animationDelay: "180ms" }}>
            Bauen nach der Schule, zocken mit deinen Klassenkameraden und chillen
            ohne Streamer, Werbung oder fremde Leute im Chat. Ein Server von
            Schülern für Schüler – stabil, fair und ohne Bezahlkram.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "240ms" }}>
            <Button variant="block" size="xl" asChild>
              <a href="#/mitmachen">▶ Jetzt mitmachen</a>
            </Button>
            <Button variant="blockDiamond" size="xl" asChild>
              <a href="#/vision">💎 Konzept ansehen</a>
            </Button>
          </div>

          {/* Pills */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl animate-rise" style={{ animationDelay: "300ms" }}>
            {[
              { icon: ShieldCheck, label: "100% kindersicher", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30" },
              { icon: Sparkles, label: "Pädagogische Events", color: "text-accent", bg: "bg-accent/10", border: "border-accent/30" },
              { icon: Users, label: "Faire Community", color: "text-secondary", bg: "bg-secondary/10", border: "border-secondary/30" },
            ].map((p) => (
              <div
                key={p.label}
                className={`flex items-center gap-3 rounded-2xl border-2 ${p.border} ${p.bg} bg-white/70 backdrop-blur px-4 py-3 shadow-sm`}
              >
                <p.icon className={p.color} size={20} />
                <span className="text-sm font-medium text-foreground">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground/60">
        <span className="font-pixel text-[9px] uppercase tracking-[0.3em]">SCROLLEN</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Pixel grass strip at bottom */}
      <div className="pixel-grass absolute bottom-0 left-0 right-0 h-8 pixelated" aria-hidden />
    </section>
  );
};
