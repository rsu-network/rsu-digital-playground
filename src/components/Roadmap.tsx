import { SectionHeader } from "./SectionHeader";
import { CheckCircle2, Loader2, Circle } from "lucide-react";

const phases = [
  {
    status: "done" as const,
    quarter: "Phase 1",
    title: "Aufbau & Konzept",
    points: [
      "Server-Hardware eingerichtet",
      "Pädagogisches Konzept finalisiert",
      "Erste Plugins & Welten konfiguriert",
    ],
  },
  {
    status: "active" as const,
    quarter: "Phase 2",
    title: "Closed Beta",
    points: [
      "Erste Schüler-Tester auf dem Server",
      "Tutorial-NPCs werden gebaut",
      "Bug-Reports über Discord & Mava",
    ],
  },
  {
    status: "todo" as const,
    quarter: "Phase 3",
    title: "Schul-Launch",
    points: [
      "Whitelist für alle interessierten Schüler",
      "Erste Community-Events & Bauwettbewerbe",
      "Schul-Nachbau startet",
    ],
  },
  {
    status: "todo" as const,
    quarter: "Phase 4",
    title: "Ausbau",
    points: [
      "Live-Map im Browser",
      "Eigene Mini-Games",
      "Saison-System mit Belohnungen",
    ],
  },
];

const statusConfig = {
  done: {
    icon: CheckCircle2,
    label: "Abgeschlossen",
    color: "text-primary",
    border: "border-primary/40",
    bg: "bg-primary/10",
  },
  active: {
    icon: Loader2,
    label: "Läuft gerade",
    color: "text-accent",
    border: "border-accent/40",
    bg: "bg-accent/10",
  },
  todo: {
    icon: Circle,
    label: "Geplant",
    color: "text-muted-foreground",
    border: "border-border",
    bg: "bg-muted/40",
  },
};

export const Roadmap = () => {
  return (
    <section id="roadmap" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="07"
          eyebrow="Roadmap"
          title={
            <>
              Wo wir <span className="text-gradient-brand">stehen</span> – und wo
              es <span className="text-gradient-brand">hingeht</span>.
            </>
          }
          description="Wir bauen den Server Stück für Stück auf – transparent und mit Feedback der Community."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p, i) => {
            const cfg = statusConfig[p.status];
            const Icon = cfg.icon;
            return (
              <div
                key={p.title}
                className={`relative rounded-3xl border ${cfg.border} bg-gradient-card p-6 transition-all hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.quarter}
                  </span>
                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full ${cfg.bg} px-2.5 py-1 text-[10px] font-medium ${cfg.color} border ${cfg.border}`}
                  >
                    <Icon
                      size={12}
                      className={p.status === "active" ? "animate-spin" : ""}
                    />
                    {cfg.label}
                  </div>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                          p.status === "todo" ? "bg-muted-foreground/40" : "bg-primary"
                        }`}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
