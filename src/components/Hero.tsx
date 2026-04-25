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
        className="pointer-events-none absolute top-[70%] right-[44%] w-10 sm-sm:w-12 animate-float-slow pixelated hidden md:block"
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