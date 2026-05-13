import { Youtube, Play, Bell, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

const CHANNEL_URL = "https://www.youtube.com/@rsu.network";

const videos = [
  {
    id: "Fj0Xmkjdf5Q",
    title: "RSU-NETWORK Server Tutorial",
    desc: "Schritt-für-Schritt: So joinst du den Server.",
  },
  {
    id: "hzddor5AHM0",
    title: "Mit der Konsole beitreten",
    desc: "Bedrock-/Konsolen-Spieler – so geht's.",
  },
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
        description="Auf unserem Kanal findest du Schritt-für-Schritt Tutorials zum Server, Plugins und Updates."
      />

      <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {videos.map((v) => (
          <Card
            key={v.id}
            className="group relative overflow-hidden comic-card bg-card hover:-translate-y-2 hover:rotate-[-1deg] transition-all duration-300"
          >
            <a
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform border-4 border-white">
                    <Play className="h-7 w-7 ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground">
                  {v.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button variant="block" size="xl" asChild>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2"
          >
            <Youtube className="h-5 w-5" />
            Kanal abonnieren
            <ExternalLink className="h-4 w-4 opacity-70" />
          </a>
        </Button>
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Bell className="h-4 w-4" /> Glocke aktivieren – mehr Videos folgen!
        </div>
      </div>
    </section>
  );
};
