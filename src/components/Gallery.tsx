import { SectionHeader } from "./SectionHeader";

const items = [
  { src: "/wiki/trails-tales.jpg", tag: "Trails & Tales", aspect: "aspect-[4/3]" },
  { src: "/wiki/alex-creeper.jpg", tag: "Erste Begegnung", aspect: "aspect-square" },
  { src: "/wiki/village-pillage.jpg", tag: "Dorf & Plünderer", aspect: "aspect-[4/3]" },
  { src: "/wiki/meet-villagers.jpg", tag: "Die Dorfbewohner", aspect: "aspect-[4/3]" },
  { src: "/wiki/nether-update.jpg", tag: "Im Nether", aspect: "aspect-square" },
  { src: "/wiki/alex-nether.jpg", tag: "Alex erkundet", aspect: "aspect-[4/3]" },
  { src: "/wiki/alex-artwork.jpg", tag: "Alex Artwork", aspect: "aspect-[4/3]" },
  { src: "/mc/creeper-render.png", tag: "Creeper-Alarm", aspect: "aspect-square" },
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
              Inspiration aus der{" "}
              <span className="text-gradient-brand">Minecraft-Welt</span>.
            </>
          }
          description="Offizielle Artworks von Mojang als Vorgeschmack – deine eigenen Builds vom RSU-Server folgen hier, sobald die ersten Projekte fertig sind."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl border-4 border-foreground/10 bg-card ${p.aspect} shadow-card hover:border-primary hover:-translate-y-1 hover:rotate-1 transition-all duration-300`}
            >
              <img
                src={p.src}
                alt={p.tag}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3">
                <p className="font-pixel text-[9px] uppercase tracking-[0.2em] text-white/80">
                  Artwork
                </p>
                <p className="mt-0.5 font-display text-sm font-bold text-white drop-shadow">
                  {p.tag}
                </p>
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Bilder © Mojang Studios · via{" "}
          <a href="https://minecraft.wiki" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">
            minecraft.wiki
          </a>
          . Du hast einen krassen Build? Schick uns dein Screenshot im Discord –
          er landet hier in der Galerie!
        </p>
      </div>
    </section>
  );
};
