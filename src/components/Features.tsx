import { SectionHeader } from "./SectionHeader";
import {
  Pickaxe,
  Sword,
  Home,
  Map,
  Sparkles,
  Trophy,
  Wand2,
  Boxes,
} from "lucide-react";

const modes = [
  {
    icon: Home,
    title: "Survival mit Grundstücken",
    text: "Hauptwelt mit Claim-System. Dein Bau gehört dir – niemand kann ihn zerstören oder ausräumen.",
  },
  {
    icon: Pickaxe,
    title: "Creative Plots",
    text: "Eigenes Grundstück zum Bauen ohne Limits. Perfekt für Architektur-Projekte oder einfach zum Ausprobieren.",
  },
  {
    icon: Sword,
    title: "Mini-Games",
    text: "Bedwars, SkyWars und Parkour-Maps – wenn du mal Lust auf eine schnelle Runde mit Freunden hast.",
  },
  {
    icon: Map,
    title: "Live-Map im Browser",
    text: "Schau dir die Welt im Browser an, finde Freunde oder zeig deinen neuesten Bau einfach per Link.",
  },
  {
    icon: Trophy,
    title: "Saisons & Quests",
    text: "Wöchentliche Aufgaben, Achievements und Saison-Belohnungen. Es gibt immer einen Grund wiederzukommen.",
  },
  {
    icon: Boxes,
    title: "Freundes-System",
    text: "Adde deine Klasse, bilde Teams, baut zusammen Städte und teleportiert euch direkt zueinander.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="04"
          eyebrow="Was dich erwartet"
          title={
            <>
              Mehr als nur ein <span className="text-gradient-brand">Vanilla Server</span>.
            </>
          }
          description="Kein langweiliges Standard-Minecraft. Wir haben den Server mit Modi und Features ausgestattet, die wirklich Spaß machen – ohne dass du etwas installieren musst."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modes.map((m) => (
            <div
              key={m.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <m.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl border border-border bg-gradient-card p-6 flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent border border-accent/20">
              <Wand2 size={20} />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground">
                Custom Items & Cosmetics
              </h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Verdiene dir Hüte, Pets und Partikel-Effekte durch Spielzeit – nicht durch Geld. Skill statt Wallet.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-card p-6 flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary border border-secondary/20">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground">
                Eigene Welten-Events
              </h4>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Halloween-Dungeons, Winter-Map, Sommer-Insel – jede Saison gibt es neue limitierte Welten zu entdecken.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
