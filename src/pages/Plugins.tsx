import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Coins,
  Map as MapIcon,
  Shield,
  Home,
  Sparkles,
  ShoppingBag,
  Hammer,
  Crown,
  Rewind,
  Image as ImageIcon,
  Swords,
  Gamepad2,
  Search,
  ExternalLink,
  Smartphone,
  Sun,
  Heart,
  PawPrint,
  Wand2,
  ScrollText,
} from "lucide-react";

type Category =
  | "Wirtschaft"
  | "Schutz"
  | "Map"
  | "Lebensqualität"
  | "Crossplay"
  | "Spaß";

interface Plugin {
  name: string;
  category: Category;
  icon: typeof Coins;
  short: string;
  summary: string;
  commands?: string[];
  link?: string;
}

const plugins: Plugin[] = [
  {
    name: "Lands",
    category: "Schutz",
    icon: Crown,
    short: "Schütze dein Land & gründe ein Königreich.",
    summary:
      "Mit Lands beanspruchst du Chunks für dich oder dein Team. Niemand außer deinen Mitgliedern kann dort bauen, abbauen oder Truhen öffnen. Du kannst mehrere Claims zu einem Land verbinden, Rollen mit Rechten vergeben und sogar Nationen aus mehreren Ländern bilden. Das GUI öffnet sich mit /lands menu – dort verwaltest du alles per Klick.",
    commands: ["/lands menu", "/lands claim", "/lands trust <Spieler>", "/lands map"],
    link: "https://wiki.lands.angelillo15.es/",
  },
  {
    name: "Jobs Reborn",
    category: "Wirtschaft",
    icon: Hammer,
    short: "Verdiene Geld durch Berufe wie Miner, Farmer & Co.",
    summary:
      "Wähle bis zu mehreren Jobs (z. B. Miner, Woodcutter, Farmer, Builder, Hunter). Für jede passende Aktion bekommst du XP und Geld. Mit steigendem Level schaltest du Boni frei. Über /jobs öffnet sich das GUI mit allen verfügbaren Berufen, Stats und deinem aktuellen Einkommen.",
    commands: ["/jobs", "/jobs join <Job>", "/jobs stats", "/jobs top"],
    link: "https://github.com/Zrips/Jobs/wiki",
  },
  {
    name: "VillagerMarket",
    category: "Wirtschaft",
    icon: ShoppingBag,
    short: "Eröffne deinen eigenen Shop mit einem Dorfbewohner.",
    summary:
      "Kaufe einen Villager-Shop und richte ihn als Spieler-Shop ein. Du legst die Items, Preise und Mengen selbst fest. Andere Spieler kaufen direkt am Villager. Es gibt auch Admin-Shops mit unbegrenztem Lager – perfekt für stabile Grundpreise.",
    commands: ["/vm shop", "/vm edit"],
    link: "https://github.com/Pou1z/VillagerMarket/wiki",
  },
  {
    name: "ChestProtect",
    category: "Schutz",
    icon: Shield,
    short: "Sperrt deine Truhen automatisch ab.",
    summary:
      "Sobald du eine Truhe, einen Trichter oder einen Ofen platzierst, gehört der Inhalt nur dir. Du kannst Freunde per Befehl hinzufügen oder den Container öffentlich machen. Verhindert Diebstahl auch außerhalb von Lands-Claims.",
    commands: ["/cp add <Spieler>", "/cp remove <Spieler>", "/cp public"],
  },
  {
    name: "CMI (Essentials)",
    category: "Lebensqualität",
    icon: Sparkles,
    short: "Homes, Warps, /tpa, Nachrichten und vieles mehr.",
    summary:
      "CMI ist unser Allround-Plugin. Setze dir Homes, teleportiere zu Freunden mit /tpa, schreibe private Nachrichten mit /msg, schau dir die Spielzeit an und nutze hunderte kleine Quality-of-Life-Befehle.",
    commands: ["/sethome", "/home", "/tpa <Spieler>", "/msg <Spieler> <Text>", "/back"],
    link: "https://www.zrips.net/cmi/",
  },
  {
    name: "BlueMap",
    category: "Map",
    icon: MapIcon,
    short: "Live-3D-Karte unserer Welt im Browser.",
    summary:
      "BlueMap rendert die gesamte Welt als interaktive 3D-Karte, die du im Browser ansehen kannst. Du siehst Spielerpositionen, Lands-Claims und kannst frei zoomen und drehen. Perfekt um vom Handy aus zu prüfen, was auf dem Server passiert.",
    link: "https://bluemap.bluecolored.de/wiki/",
  },
  {
    name: "CoreProtect",
    category: "Schutz",
    icon: Rewind,
    short: "Macht Griefing rückgängig – alles wird geloggt.",
    summary:
      "Jede Block-Aktion, Truhen-Bewegung und jeder Kill wird gespeichert. Mods können bei Griefing per /co rollback alles in den Originalzustand zurücksetzen. Du selbst kannst mit /co i (Inspect) sehen, wer einen Block platziert oder zerstört hat.",
    commands: ["/co i", "/co lookup", "/co rollback"],
    link: "https://docs.coreprotect.net/",
  },
  {
    name: "Geyser + Floodgate",
    category: "Crossplay",
    icon: Smartphone,
    short: "Spiele auch von Bedrock (Handy / Konsole) mit.",
    summary:
      "Dank Geyser kannst du dich mit der Bedrock Edition (Handy, Switch, Xbox, PS) auf unserem Java-Server verbinden. Floodgate sorgt dafür, dass du dich ohne Java-Account einloggen kannst.",
    link: "https://geysermc.org/wiki/",
  },
  {
    name: "ViaVersion + ViaBackwards",
    category: "Crossplay",
    icon: Gamepad2,
    short: "Spiele mit fast jeder Minecraft-Version.",
    summary:
      "Du musst nicht die exakte Server-Version nutzen. ViaVersion und ViaBackwards übersetzen ältere und neuere Clients, sodass du bequem von 1.20 bis zur aktuellen Version joinen kannst.",
    link: "https://github.com/ViaVersion/ViaVersion/wiki",
  },
  {
    name: "AutoTotem",
    category: "Lebensqualität",
    icon: Heart,
    short: "Legt automatisch ein Totem in die Off-Hand.",
    summary:
      "Sobald dein Totem in der zweiten Hand verbraucht wird, zieht AutoTotem das nächste aus deinem Inventar nach. Spart Leben in PvP- und Endgame-Situationen.",
    commands: ["/autototem"],
  },
  {
    name: "PvPManager",
    category: "Schutz",
    icon: Swords,
    short: "Faires PvP mit Tag-System & Schutz für Neue.",
    summary:
      "Wer angreift, wird kurz im PvP-Modus markiert (kein Logout-Trick). Frische Spieler haben einen Schutz, bis sie selbst angreifen. /pvp toggle erlaubt es dir, PvP komplett auszuschalten.",
    commands: ["/pvp", "/pvp toggle"],
  },
  {
    name: "ImageFrame",
    category: "Spaß",
    icon: ImageIcon,
    short: "Zeige echte Bilder in Item-Frames.",
    summary:
      "Lade Bilder hoch und hänge sie als Maps in Item-Frames. Perfekt für Wandbilder, Logos in Shops oder Kunstwerke in deiner Basis. Animierte GIFs werden ebenfalls unterstützt.",
    commands: ["/imageframe select", "/imageframe place"],
  },
  {
    name: "HeadDatabase",
    category: "Spaß",
    icon: Crown,
    short: "Tausende dekorative Köpfe zum Bauen.",
    summary:
      "Über /hdb öffnest du eine riesige Datenbank an Custom-Skull-Köpfen – von Möbelstücken über Tiere bis hin zu Berühmtheiten. Ideal für detaillierte Builds.",
    commands: ["/hdb"],
  },
  {
    name: "PetProtector",
    category: "Schutz",
    icon: PawPrint,
    short: "Niemand kann deine gezähmten Tiere töten.",
    summary:
      "Hunde, Katzen, Pferde und andere Pets sind automatisch vor anderen Spielern geschützt. Schluss mit getroll-tem Wolf-Kill.",
  },
  {
    name: "LibsDisguises",
    category: "Spaß",
    icon: Wand2,
    short: "Verkleide dich als Mob oder anderer Spieler.",
    summary:
      "Mit /disguise wirst du zum Creeper, Wolf, Villager oder sogar einem anderen Spielernamen. Wird hauptsächlich von Mods für Events benutzt – manchmal aber auch als Reward freigeschaltet.",
    commands: ["/disguise <Mob>", "/undisguise"],
    link: "https://github.com/libraryaddict/LibsDisguises/wiki",
  },
  {
    name: "Fullbright",
    category: "Lebensqualität",
    icon: Sun,
    short: "Höhlen ohne Fackeln auf Maximum sehen.",
    summary:
      "Aktiviert dauerhaftes Nachtsicht-ähnliches Licht für deinen Client. Perfekt für Mining-Trips ohne ständig Fackeln zu setzen.",
    commands: ["/fullbright"],
  },
  {
    name: "EnhancedRails",
    category: "Lebensqualität",
    icon: ScrollText,
    short: "Schnellere & längere Minecart-Strecken.",
    summary:
      "Loren fahren weiter, schneller und stoppen nicht mehr ständig. Macht Eisenbahn-Projekte endlich realistisch nutzbar.",
  },
  {
    name: "Pfandsystem",
    category: "Wirtschaft",
    icon: Coins,
    short: "Sammle Pfand wie im echten Leben.",
    summary:
      "Leere Flaschen und bestimmte Items kannst du am Pfandautomat zurückgeben und bekommst Geld dafür. Eigenentwicklung von uns – passend zu unserem Schul-Server-Vibe.",
  },
];

const categories: ("Alle" | Category)[] = [
  "Alle",
  "Wirtschaft",
  "Schutz",
  "Map",
  "Lebensqualität",
  "Crossplay",
  "Spaß",
];

const Plugins = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("Alle");
  const [query, setQuery] = useState("");

  const filtered = plugins.filter((p) => {
    const matchCat = active === "Alle" || p.category === active;
    const matchQuery =
      query.trim() === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.short.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="container pt-32 pb-12">
        <SectionHeader
          eyebrow="Plugins"
          number="01"
          title={
            <>
              Was läuft auf{" "}
              <span className="text-transparent bg-clip-text bg-gradient-brand">
                mc.rsu.network
              </span>
            </>
          }
          description="Eine Auswahl unserer wichtigsten Plugins – kurz erklärt, mit Befehlen und Links zu den offiziellen Wikis. So findest du dich in deinen ersten Minuten direkt zurecht."
        />

        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Plugin suchen..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  active === c
                    ? "bg-primary text-primary-foreground border-transparent"
                    : "bg-background/40 border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.name}
                className="p-5 bg-card/50 backdrop-blur border-border/60 hover:border-primary/40 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-foreground">
                        {p.name}
                      </h3>
                      <Badge variant="outline" className="text-[10px]">
                        {p.category}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {p.short}
                    </p>
                  </div>
                </div>

                <Accordion type="single" collapsible className="mt-3">
                  <AccordionItem value="details" className="border-b-0">
                    <AccordionTrigger className="py-2 text-xs font-mono uppercase tracking-wider text-primary hover:no-underline">
                      Details & Befehle
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                      <p>{p.summary}</p>
                      {p.commands && (
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-foreground/60">
                            Befehle
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {p.commands.map((c) => (
                              <code
                                key={c}
                                className="text-[11px] px-2 py-1 rounded bg-muted text-foreground font-mono"
                              >
                                {c}
                              </code>
                            ))}
                          </div>
                        </div>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                        >
                          Offizielles Wiki <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            Keine Plugins gefunden.
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Ein Plugin fehlt oder du brauchst Hilfe?
          </p>
          <Button variant="hero" className="mt-4" asChild>
            <a href="/#mitmachen">Im Discord fragen</a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Plugins;
