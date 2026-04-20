import { SectionHeader } from "./SectionHeader";
import {
  Users,
  Coins,
  Lightbulb,
  Heart,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const goals = [
  { icon: Users, title: "Teamwork", text: "Zusammen bauen, planen, erreichen." },
  { icon: Coins, title: "Wirtschaft", text: "Ressourcen verstehen & verwalten." },
  { icon: Lightbulb, title: "Kreativität", text: "Ideen frei umsetzen." },
  { icon: Heart, title: "Verantwortung", text: "Fair handeln, Konflikte lösen." },
  { icon: Smartphone, title: "Medienkompetenz", text: "Bewusster digitaler Umgang." },
  { icon: ShieldCheck, title: "Sicherheit", text: "Geschützter Raum, klare Regeln." },
];

export const Vision = () => {
  return (
    <section id="vision" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="01"
          eyebrow="Vision & Grundidee"
          title={
            <>
              Ein digitaler Raum, in dem Kinder{" "}
              <span className="text-gradient-brand">echte Kompetenzen</span>{" "}
              entwickeln.
            </>
          }
          description="Der RSU Network Server ist als pädagogisch wertvoller Lernraum konzipiert. Spielerisch entdecken Schülerinnen und Schüler Teamwork, Wirtschaft, Kreativität und digitale Verantwortung – moderiert von Schüler-Admins und betreut durch IT-Lehrkräfte."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((g, i) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <g.icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {g.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
