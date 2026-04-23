import { Button } from "@/components/ui/button";
import { Copy, Check, Server, MessageCircle, School } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SERVER_IP = "mc.rsu.network";
const VERSION = "1.21.x · Java Edition";
const DISCORD_URL = "https://discord.gg/uREKErvXXf";

export const Join = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    toast.success("Server IP kopiert!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="mitmachen" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-card p-8 sm:p-16 shadow-card">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs text-primary">
              <Server size={14} />
              So machst du mit
            </div>

            <h2 className="mt-6 font-display text-4xl sm:text-6xl font-bold tracking-tight">
              Drei Schritte, dann{" "}
              <span className="text-gradient-brand">bist du dabei</span>.
            </h2>

            <ol className="mt-12 grid sm:grid-cols-3 gap-5">
              {[
                {
                  n: "01",
                  title: "Minecraft starten",
                  text: `Java Edition ${VERSION}. Klicke auf „Mehrspieler".`,
                },
                {
                  n: "02",
                  title: "Server hinzufügen",
                  text: "Trage die IP unten ein und speichere den Server.",
                },
                {
                  n: "03",
                  title: "Tutorial starten",
                  text: "Beim ersten Login startet automatisch dein Onboarding.",
                },
              ].map((s) => (
                <li
                  key={s.n}
                  className="rounded-2xl border border-border bg-background/40 backdrop-blur p-6"
                >
                  <span className="font-mono text-xs text-primary">{s.n}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-border bg-background/60 backdrop-blur p-2 sm:p-3 flex items-center gap-3">
              <div className="flex-1 px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Server IP
                </p>
                <p className="font-mono text-base sm:text-lg text-foreground truncate">
                  {SERVER_IP}
                </p>
              </div>
              <Button onClick={copy} variant="block" size="lg">
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "KOPIERT" : "KOPIEREN"}
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Whitelist · So kommst du drauf
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">Über Discord</p>
                      <p className="text-xs text-muted-foreground">Moderiert · Schnellster Weg</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tritt unserem Discord bei und schreib im Whitelist-Channel deinen
                    Minecraft-Namen und deine Klasse. Wir schalten dich frei.
                  </p>
                  <Button asChild variant="glass" size="sm" className="self-start">
                    <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                      Discord beitreten
                    </a>
                  </Button>
                </div>

                <div className="rounded-2xl border border-border bg-background/60 backdrop-blur p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                      <School size={18} />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">In der Schule</p>
                      <p className="text-xs text-muted-foreground">Persönlich · Zu Anmeldezeiten</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Komm während unserer Anmeldezeiten in der Schule vorbei. Bring
                    deinen Minecraft-Namen mit – wir tragen dich direkt ein.
                  </p>
                  <p className="text-xs font-mono text-foreground/80">
                    Termine werden im Discord & per Aushang bekannt gegeben.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              * Der Zugang ist exklusiv für Schülerinnen und Schüler der RSU Germering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
