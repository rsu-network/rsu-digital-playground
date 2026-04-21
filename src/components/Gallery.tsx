import { SectionHeader } from "./SectionHeader";
import { ImageIcon } from "lucide-react";

const placeholders = [
  { tag: "Spawn", aspect: "aspect-[4/3]" },
  { tag: "Skyline", aspect: "aspect-square" },
  { tag: "Burg", aspect: "aspect-[4/3]" },
  { tag: "Mittelalter-Dorf", aspect: "aspect-[4/3]" },
  { tag: "Farm", aspect: "aspect-square" },
  { tag: "Redstone", aspect: "aspect-[4/3]" },
  { tag: "Markt", aspect: "aspect-[4/3]" },
  { tag: "Nether-Hub", aspect: "aspect-square" },
  { tag: "End City", aspect: "aspect-[4/3]" },
  { tag: "Event Map", aspect: "aspect-[4/3]" },
  { tag: "Parkour", aspect: "aspect-square" },
  { tag: "Community Build", aspect: "aspect-[4/3]" },
];

export const Gallery = () => {
  return (
    <section id="galerie" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="06"
          eyebrow="Galerie"
          title={
            <>
              Was bei uns auf dem{" "}
              <span className="text-gradient-brand">Server entsteht</span>.
            </>
          }
          description="Eine kleine Auswahl von Builds, Events und Momenten – Bilder folgen, sobald die ersten Projekte fertig sind."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {placeholders.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-card ${p.aspect}`}
            >
              {/* Pixelated minecraft-style placeholder pattern */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, hsl(var(--muted)) 25%, transparent 25%),
                    linear-gradient(-45deg, hsl(var(--muted)) 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, hsl(var(--muted)) 75%),
                    linear-gradient(-45deg, transparent 75%, hsl(var(--muted)) 75%)
                  `,
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/70 backdrop-blur border border-border text-muted-foreground">
                  <ImageIcon size={18} />
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Platzhalter
                </p>
                <p className="mt-1 font-display text-sm font-semibold text-foreground">
                  {p.tag}
                </p>
              </div>

              <div className="absolute inset-0 ring-1 ring-inset ring-border/40 group-hover:ring-primary/40 transition" />
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Du hast einen krassen Build? Schick uns dein Screenshot im Discord –
          er landet hier in der Galerie.
        </p>
      </div>
    </section>
  );
};
