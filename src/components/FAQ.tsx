import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Brauche ich eine eigene Minecraft-Lizenz?",
    a: "Ja, du benötigst die Java Edition von Minecraft. In Absprache mit der Schule können wir auch Optionen für gemeinsame Zugänge prüfen.",
  },
  {
    q: "Kostet die Teilnahme am Server etwas?",
    a: "Nein. Es gibt kein Pay2Win und keine versteckten Kosten. Alle Spieler haben die gleichen Chancen.",
  },
  {
    q: "Wer moderiert den Server?",
    a: "Der Server wird durch geschulte Schüler-Admins moderiert und in Absprache mit IT-Lehrkräften betreut. Toxisches Verhalten wird automatisch erkannt und sanktioniert.",
  },
  {
    q: "Was passiert mit meinen Daten?",
    a: "Wir handeln vollständig DSGVO-konform. Es werden nur die für den Spielbetrieb notwendigen Daten erhoben und sicher gespeichert.",
  },
  {
    q: "Kann der Server im Unterricht eingesetzt werden?",
    a: "Ja, ausdrücklich. Lehrkräfte können Events thematisch auf den Unterricht abstimmen – z.B. für Geometrie, Architektur, Geschichte oder Informatik.",
  },
  {
    q: "Was, wenn ich noch nie Minecraft gespielt habe?",
    a: "Kein Problem! Beim ersten Login startet automatisch ein interaktives Tutorial, das dich Schritt für Schritt einführt.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="06"
          eyebrow="FAQ"
          title={
            <>
              Häufige <span className="text-gradient-brand">Fragen</span>
            </>
          }
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-gradient-card px-6 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left font-display text-base sm:text-lg font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
