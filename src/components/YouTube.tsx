import { Youtube, Play, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

const placeholders = [
  { title: "Erste Schritte auf dem Server", duration: "Bald verfügbar" },
  { title: "Lands & Claims erklärt", duration: "Bald verfügbar" },
  { title: "Jobs & Geld verdienen", duration: "Bald verfügbar" },
];

export const YouTube = () => {
  return (
    <section id="youtube" className="container py-24 md:py-32">
      <SectionHeader
        eyebrow="Tutorials"
        number="07"
        align="center"
        title={
          <>
            Lernvideos auf{" "}
            <span className="inline-block px-3 py-1 rounded-xl bg-[#FF0000] text-white shadow-lg border-4 border-foreground/10">
              YouTube
            </span>
          </>
        }
        description="Wir bauen gerade unseren YouTube-Kanal auf. Dort findest du Schritt-für-Schritt Tutorials zu allen wichtigen Plugins, Bauideen und Server-Updates."
      />

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {placeholders.map((v, i) => (
          <Card
            key={i}
            className="group relative overflow-hidden bg-card/50 border-border/60 hover:border-primary/40 transition-all"
          >
            <div className="aspect-video relative bg-gradient-to-br from-muted/40 to-muted/10 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%, transparent 75%, hsl(var(--primary)) 75%), linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%, transparent 75%, hsl(var(--primary)) 75%)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative h-14 w-14 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-background/80 backdrop-blur text-[10px] font-mono text-muted-foreground">
                {v.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-foreground">
                {v.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Platzhalter — Video folgt
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button variant="hero" size="lg" asChild>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Youtube className="h-5 w-5" />
            Kanal abonnieren
          </a>
        </Button>
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Bell className="h-4 w-4" /> Glocke aktivieren – wir starten bald.
        </div>
      </div>
    </section>
  );
};
