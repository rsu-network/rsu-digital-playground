import { SectionHeader } from "./SectionHeader";
import { Calculator, Landmark, Leaf, UsersRound } from "lucide-react";

const events = [
  {
    icon: Calculator,
    tag: "Mathematik",
    title: "Redstone & Logik",
    items: [
      "Redstone-Logik-Rätsel lösen",
      "Funktionierende Rechenmaschine bauen",
      "Schatzsuche mit Koordinaten",
      "Flächenberechnungen beim Bauen",
    ],
  },
  {
    icon: Landmark,
    tag: "Geschichte & Kultur",
    title: "Historische Welten",
    items: [
      "Nachbau historischer Gebäude",
      "Quiz-Events zu Architektur",
      "Kulturelle Recherche-Projekte",
      "Kolosseum, Pyramiden & mehr",
    ],
  },
  {
    icon: Leaf,
    tag: "Umwelt",
    title: "Green Events",
    items: [
      "„Pflanze 100 Bäume" Event",
      "Recycling: Items wiederverwerten",
      "Effiziente Energie mit Redstone",
      "Nachhaltige Baukonzepte",
    ],
  },
  {
    icon: UsersRound,
    tag: "Teamwork",
    title: "Community Challenges",
    items: [
      "Stadtbau-Wettbewerb in Teams",
      "Kooperative Dungeons meistern",
      "Große Gemeinschaftsprojekte",
      "Klassenübergreifende Aktionen",
    ],
  },
];

export const Events = () => {
  return (
    <section id="events" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="04"
          eyebrow="Bildende Events"
          title={
            <>
              Lerninhalte, direkt im{" "}
              <span className="text-gradient-brand">Spiel erlebt</span>.
            </>
          }
          description="Regelmäßige, pädagogisch gestaltete Events integrieren Lerninhalte verschiedener Fachbereiche – in Absprache mit Lehrkräften thematisch auf den Unterricht abgestimmt."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((e) => (
            <article
              key={e.title}
              className="group relative rounded-3xl border border-border bg-gradient-card p-7 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <e.icon size={22} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {e.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                {e.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {e.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Featured Event */}
        <div className="mt-10 relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-8 sm:p-12 shadow-card">
          <div className="absolute inset-0 bg-gradient-glow opacity-40 pointer-events-none" />
          <div className="relative grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">
                🏫 Sonderevent
              </div>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
                Baut unsere <span className="text-gradient-brand">Schule nach!</span>
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                Schulweiter Wettbewerb: Alle Schüler bauen gemeinsam die Schule
                in Minecraft nach – so originalgetreu wie möglich. Das Ergebnis
                bleibt dauerhaft auf dem Server als digitales Denkmal. Lehrkräfte
                können Geometrie, Maßstab und Architektur direkt einbinden.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { v: "∞", l: "Möglichkeiten" },
                { v: "8+", l: "Wochen Bauzeit" },
                { v: "1", l: "Riesiges Projekt" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-background/50 p-4"
                >
                  <div className="font-display text-3xl font-bold text-gradient-brand">
                    {s.v}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
