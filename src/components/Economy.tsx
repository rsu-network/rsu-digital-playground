import { SectionHeader } from "./SectionHeader";
import { Recycle, Store, TrendingUp, PiggyBank } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Eigene Shops",
    text: "Spieler eröffnen Shops und bestimmen ihre Preise selbst.",
  },
  {
    icon: TrendingUp,
    title: "Angebot & Nachfrage",
    text: "Wirtschaftliche Grundprinzipien in Echtzeit erleben.",
  },
  {
    icon: PiggyBank,
    title: "Sparen & Investieren",
    text: "Kapital aufbauen, Preise vergleichen, Strategien lernen.",
  },
];

export const Economy = () => {
  return (
    <section id="economy" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="03"
          eyebrow="Kinderfreundliche Economy"
          title={
            <>
              Spielerisch lernen, was{" "}
              <span className="text-gradient-brand">Wirtschaft</span> bedeutet.
            </>
          }
          description="Jeder Mechanismus auf RSU Network hat eine reale Entsprechung – damit der Lerntransfer in den Schulalltag funktioniert."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          {/* Highlight: Pfandsystem */}
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-8 sm:p-10 shadow-card">
            <div className="absolute inset-0 opacity-30 bg-gradient-glow pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
                <Recycle size={14} />
                Highlight Mechanik
              </div>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-bold text-foreground">
                Das <span className="text-gradient-brand">Pfandflaschen-System</span>
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Beim Besiegen von Mobs erhalten Spieler virtuelle Pfandflaschen.
                Diese bringen sie zum Server-Automaten und tauschen sie gegen
                Spielgeld ein – genau wie im echten Leben. Eine direkte Brücke
                zwischen Spiel und Alltag.
              </p>

              <div className="mt-8 flex items-end gap-1 h-32">
                {[40, 65, 50, 80, 60, 95, 70, 88, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-primary/20 to-primary/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <span>Mo</span><span>Di</span><span>Mi</span><span>Do</span>
                <span>Fr</span><span>Sa</span><span>So</span><span>+1</span><span>+2</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground">
                      {f.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
