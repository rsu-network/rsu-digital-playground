import { Logo } from "./Logo";
import creeper from "@/assets/mc/creeper-render.png";
import pig from "@/assets/mc/pig-head.png";
import villager from "@/assets/mc/villager-head.png";
import enderman from "@/assets/mc/enderman-head.png";
import skeleton from "@/assets/mc/skeleton-head.png";
import zombie from "@/assets/mc/zombie-head.png";

export const Footer = () => {
  return (
    <footer className="relative border-t-2 border-border mt-12 overflow-hidden">
      <div className="relative flex items-end justify-center gap-6 sm:gap-10 pb-1 pt-6 px-4 flex-wrap">
        {[creeper, zombie, skeleton, villager, pig, enderman].map((m, i) => (
          <img
            key={i}
            src={m}
            alt=""
            aria-hidden
            className="h-12 w-12 sm:h-16 sm:w-16 pixelated animate-float"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
      <div className="pixel-grass h-6 pixelated" aria-hidden />
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={42} className="rounded-xl" />
              <div>
                <p className="font-display text-lg font-bold text-foreground">
                  RSU Network
                </p>
                <p className="text-xs text-muted-foreground">
                  Pädagogischer Minecraft Server
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Wo Lernen auf Spielspaß trifft. Ein sicherer digitaler Raum für
              Schülerinnen und Schüler unserer Schule.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Navigation
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Vision", "#vision"],
                ["Tutorial", "#tutorial"],
                ["Economy", "#economy"],
                ["Events", "#events"],
                ["Sicherheit", "#sicherheit"],
                ["Mitmachen", "#mitmachen"],
                ["FAQ", "#faq"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Kontakt
            </p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Schul-IT Team</li>
              <li>Server: mc.rsu.network</li>
              <li>
                <a
                  href="https://discord.gg/uREKErvXXf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Discord beitreten →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} RSU Network. Alle Rechte vorbehalten.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            v2.0 · Pädagogisches Konzept
          </p>
        </div>
      </div>
    </footer>
  );
};
