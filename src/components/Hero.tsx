import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import heroImg from "@/assets/hero-world.jpg";
import grassBlock from "@/assets/block-grass.png";
import diamondBlock from "@/assets/block-diamond.png";
import creeper from "@/assets/creeper.png";
import pickaxe from "@/assets/pickaxe.png";
import { Sparkles, ShieldCheck, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Minecraft Welt mit schwebenden Inseln"
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Floating Minecraft blocks - decorative */}
      <img
        src={grassBlock}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-32 right-[8%] w-20 sm:w-28 animate-float pixelated drop-shadow-2xl"
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={diamondBlock}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-40 right-[18%] w-16 sm:w-24 animate-float-slow pixelated drop-shadow-2xl"
        style={{ animationDelay: "1s" }}
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={creeper}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[3%] w-14 sm:w-20 animate-wiggle pixelated drop-shadow-xl hidden md:block"
        loading="lazy"
        width={512}
        height={512}
      />
      <img
        src={pickaxe}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-24 right-[35%] w-12 sm:w-16 animate-float pixelated hidden lg:block"
        style={{ animationDelay: "2s" }}
        loading="lazy"
        width={512}
        height={512}
      />

      <div className="container relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground animate-rise">
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
            unsere <span className="text-gradient-brand">Schule</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: "180ms" }}>
            Bauen nach der Schule, zocken mit deinen Klassenkameraden und chillen
            ohne Streamer, Werbung oder fremde Leute im Chat. Ein Server von
            Schülern für Schüler – stabil, fair und ohne Bezahlkram.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-rise" style={{ animationDelay: "240ms" }}>
            <Button variant="block" size="xl" asChild>
              <a href="#mitmachen">▶ Jetzt mitmachen</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#vision">Konzept ansehen</a>
            </Button>
          </div>

          {/* Pills */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl animate-rise" style={{ animationDelay: "300ms" }}>
            {[
              { icon: ShieldCheck, label: "100% kindersicher" },
              { icon: Sparkles, label: "Pädagogische Events" },
              { icon: Users, label: "Faire Community" },
            ].map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 backdrop-blur px-4 py-3"
              >
                <p.icon className="text-primary" size={18} />
                <span className="text-sm text-foreground">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="font-pixel text-[9px] uppercase tracking-[0.3em]">SCROLLEN</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Pixel grass strip at bottom */}
      <div className="pixel-grass absolute bottom-0 left-0 right-0 h-6 pixelated" aria-hidden />
    </section>
  );
};
