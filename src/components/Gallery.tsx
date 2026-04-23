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
          {placeholders.map((p, i) => {
            const palettes = [
              ["hsl(95 70% 45%)", "hsl(28 55% 35%)"], // grass
              ["hsl(200 80% 55%)", "hsl(210 60% 30%)"], // water
              ["hsl(45 80% 55%)", "hsl(30 60% 40%)"], // sand
              ["hsl(0 0% 55%)", "hsl(0 0% 30%)"], // stone
              ["hsl(280 50% 50%)", "hsl(280 40% 25%)"], // end
              ["hsl(15 70% 45%)", "hsl(15 60% 25%)"], // nether
            ];
            const [c1, c2] = palettes[i % palettes.length];
            return (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-card ${p.aspect} hover:border-primary/60 transition`}
              >
                {/* Pixelated minecraft-style block pattern */}
                <div
                  className="absolute inset-0 pixelated"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, ${c1} 25%, transparent 25%),
                      linear-gradient(-45deg, ${c1} 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, ${c2} 75%),
                      linear-gradient(-45deg, transparent 75%, ${c2} 75%)
                    `,
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
                    opacity: 0.55,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-foreground/30 bg-background/80 backdrop-blur text-foreground group-hover:scale-110 transition-transform">
                    <ImageIcon size={18} />
                  </div>
                  <p className="mt-3 font-pixel text-[8px] uppercase tracking-[0.2em] text-foreground/70">
                    Bald
                  </p>
                  <p className="mt-2 font-display text-sm font-semibold text-foreground drop-shadow">
                    {p.tag}
                  </p>
                </div>

                <div className="absolute inset-0 ring-1 ring-inset ring-border/40 group-hover:ring-primary/40 transition" />
              </figure>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Du hast einen krassen Build? Schick uns dein Screenshot im Discord –
          er landet hier in der Galerie.
        </p>
      </div>
    </section>
  );
};
