import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Willkommen auf RSU Network",
    badge: "Auto",
    text: "Spawn in einem speziellen Tutorial-Bereich. Ein NPC begrüßt dich und erklärt das Konzept des Servers.",
  },
  {
    n: "02",
    title: "Regelwerk interaktiv",
    badge: "Pflicht",
    text: "Schritt für Schritt durchlaufen – am Ende bestätigst du per Knopfdruck, dass du die Regeln verstanden hast.",
  },
  {
    n: "03",
    title: "Economy Einführung",
    badge: "Geld & Handel",
    text: "Wie verdient man Coins, was sind Pfandflaschen, wie eröffnet man einen Shop? Du erhältst dein Startkapital.",
  },
  {
    n: "04",
    title: "Teams & Grundstücke",
    badge: "Schutz",
    text: "Erfahre, wie du einer Gruppe beitrittst und dein Grundstück vor anderen Spielern absicherst.",
  },
  {
    n: "05",
    title: "Events & Aufgaben",
    badge: "Start",
    text: "Übersicht aller laufenden Events und Wochenaufgaben, danach geht es in die Hauptwelt.",
  },
];

export const Tutorial = () => {
  return (
    <section id="tutorial" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="02"
          eyebrow="Onboarding"
          title={
            <>
              Beim ersten Login startet dein{" "}
              <span className="text-gradient-brand">Tutorial</span>.
            </>
          }
          description="Egal ob Anfänger oder Profi – jeder Spieler wird mit dem Server, den Regeln und der Economy vertraut gemacht. Geschätzte Dauer: 10–15 Minuten."
        />

        <div className="mt-16 relative">
          {/* connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent hidden sm:block" />

          <ol className="space-y-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group relative sm:pl-20 rounded-3xl border border-border bg-gradient-card p-6 sm:p-8 transition-all duration-500 hover:border-primary/40"
              >
                <div className="absolute left-0 top-6 sm:top-8 hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-sm text-primary shadow-glow">
                  {s.n}
                </div>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="sm:hidden inline-flex font-mono text-xs text-primary mb-2">
                      {s.n}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {s.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {s.badge}
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Technische Umsetzung:</span>{" "}
          Realisiert über das Citizens-Plugin (NPCs) und WorldGuard-Regionen. Spieler ohne abgeschlossenes Tutorial haben automatisch eingeschränkte Rechte.
        </div>
      </div>
    </section>
  );
};
