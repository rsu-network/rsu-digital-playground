import { SectionHeader } from "./SectionHeader";
import { Check } from "lucide-react";

const safety = [
  "Anti-Beleidigungs-Filter (automatisch)",
  "Chat-Regeln Tutorial beim Einstieg",
  "Moderation durch geschulte Schüler-Admins",
  "Auto-Ban bei toxischem Verhalten",
  "Kein Pay2Win, alle haben gleiche Chancen",
  "DSGVO-konformer Datenschutz",
  "Keine öffentlichen Chats mit Fremden",
  "Vollständige Kontrolle über Inhalte",
];

export const Safety = () => {
  return (
    <section id="sicherheit" className="relative py-28 sm:py-36">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            number="05"
            eyebrow="Sicherheit & Vertrauen"
            title={
              <>
                Ein <span className="text-gradient-brand">geschützter Raum</span> für
                unsere Schüler.
              </>
            }
            description="Anders als auf öffentlichen Servern haben wir vollständige Kontrolle über Regeln, Moderation und Datenschutz. So entsteht ein sicheres Umfeld, in dem soziales Lernen aktiv gefördert wird."
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {safety.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-2xl border border-border bg-gradient-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-sm text-foreground leading-snug">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
