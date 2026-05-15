import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Crown, Hammer, ShoppingBag, Shield, Home, Map as MapIcon, Rewind,
  Smartphone, Gamepad2, Heart, Swords, Image as ImageIcon, Sparkles,
  PawPrint, Wand2, Sun, TramFront, Coins, Calculator, Smile, Clock,
  HandCoins, Compass, LayoutGrid, EyeOff, Frame, KeyRound, MessageSquare,
  Search, ExternalLink,
} from "lucide-react";

type Cat = "🏠 Mein Zuhause" | "💰 Geld & Handel" | "🛡️ Schutz" | "🌍 Welt & Reisen" | "🎮 Spaß & Action" | "📱 Handy & Crossplay" | "💬 Chat & Hilfe";

interface KidPlugin {
  name: string;
  category: Cat;
  icon: typeof Crown;
  emoji: string;
  oneLiner: string;          // very short, kid friendly
  story: string;             // longer kid-friendly explanation
  howTo: string[];           // step-by-step list
  commands?: { cmd: string; what: string }[];
  tip?: string;
  link?: string;
  color: string;             // tailwind bg color class for icon tile
}

const plugins: KidPlugin[] = [
  {
    name: "Lands",
    category: "🛡️ Schutz",
    icon: Crown,
    emoji: "👑",
    color: "bg-yellow-400",
    oneLiner: "Dein eigenes Königreich, das niemand kaputt machen kann!",
    story:
      "Stell dir vor, du baust ein wunderschönes Haus – und am nächsten Tag ist alles weg. 😢 Mit Lands passiert das NIE! Du steckst dein Land ab und nur du (und deine Freunde, die du erlaubst) dürfen dort bauen, abbauen oder Truhen öffnen.",
    howTo: [
      "Schreibe /lands menu – ein cooles Fenster öffnet sich",
      "Klicke auf 'Land erstellen' und gib ihm einen lustigen Namen",
      "Stelle dich auf den Chunk, den du haben willst, und klicke 'Claim'",
      "Mit /lands trust <Name> ladest du Freunde ein",
    ],
    commands: [
      { cmd: "/lands menu", what: "öffnet das große Land-Menü" },
      { cmd: "/lands claim", what: "schnappt dir den Boden, auf dem du stehst" },
      { cmd: "/lands trust Max", what: "Max darf jetzt mitbauen" },
      { cmd: "/lands map", what: "zeigt eine Mini-Karte deiner Länder" },
    ],
    tip: "Tipp: Setz immer ZUERST das Land, BEVOR du baust – sonst kann dir jemand was klauen!",
    link: "https://wiki.lands.angelillo15.es/",
  },
  {
    name: "ChestProtect",
    category: "🛡️ Schutz",
    icon: Shield,
    emoji: "🔒",
    color: "bg-blue-400",
    oneLiner: "Deine Truhen schließen sich automatisch ab. Wie magisch! ✨",
    story:
      "Sobald du eine Truhe platzierst, ist ein unsichtbares Schloss dran. Nur du kannst sie öffnen! Auch Trichter und Öfen sind geschützt. Niemand kann deine Diamanten klauen.",
    howTo: [
      "Truhe einfach hinstellen – fertig, sie ist geschützt!",
      "Mit /cp add <Name> darf ein Freund auch rein",
      "Mit /cp public ist sie für alle offen (z.B. für eine Gemeinschafts-Truhe)",
    ],
    commands: [
      { cmd: "/cp add Lisa", what: "Lisa darf in deine Truhe schauen" },
      { cmd: "/cp remove Lisa", what: "Lisa darf nicht mehr rein" },
      { cmd: "/cp public", what: "macht die Truhe öffentlich" },
    ],
    tip: "Geheimer Trick: Auch Schilder neben Truhen kann man als Hinweis nehmen.",
  },
  {
    name: "CMI – Homes & Teleport",
    category: "🏠 Mein Zuhause",
    icon: Home,
    emoji: "🏡",
    color: "bg-green-400",
    oneLiner: "Setz dir bis zu mehreren Zuhausen und teleportiere blitzschnell!",
    story:
      "Du bist gerade tief in einer Höhle und hast keine Lust zurückzulaufen? Mit /home zauberst du dich nach Hause! Du kannst auch zu Freunden teleportieren oder ihnen Nachrichten schreiben.",
    howTo: [
      "Stell dich an dein Bett und schreibe /sethome",
      "Egal wo du bist – /home bringt dich sofort zurück",
      "Du willst zu deinem Freund? /tpa <Name> – er muss nur 'akzeptieren' klicken",
    ],
    commands: [
      { cmd: "/sethome", what: "speichert deinen aktuellen Ort als Zuhause" },
      { cmd: "/home", what: "teleportiert dich heim" },
      { cmd: "/tpa Max", what: "fragt Max, ob du zu ihm darfst" },
      { cmd: "/msg Max Hi!", what: "schickt Max eine private Nachricht" },
      { cmd: "/back", what: "bringt dich zurück, wo du gerade warst" },
    ],
    tip: "Mit /sethome haus2 kannst du mehrere Häuser speichern!",
  },
  {
    name: "Jobs Reborn",
    category: "💰 Geld & Handel",
    icon: Hammer,
    emoji: "⛏️",
    color: "bg-orange-400",
    oneLiner: "Werde Bergmann, Bauer, Holzfäller – verdiene Geld mit dem, was du gerne machst!",
    story:
      "Du baust gerne Bäume ab? Werde Holzfäller! Du liebst Bergbau? Werde Miner! Für jede Aktion bekommst du Münzen und Erfahrung. Je höher dein Level, desto mehr verdienst du.",
    howTo: [
      "Schreibe /jobs – ein Menü zeigt alle Berufe",
      "Wähle einen Beruf, der dir Spaß macht",
      "Mache einfach das, was zum Beruf gehört (Holz hacken, Erz abbauen…)",
      "Schau mit /jobs stats, wie viel du schon verdient hast!",
    ],
    commands: [
      { cmd: "/jobs", what: "öffnet das Jobs-Menü" },
      { cmd: "/jobs join Miner", what: "du wirst Bergmann" },
      { cmd: "/jobs stats", what: "zeigt dein Level & Geld" },
      { cmd: "/jobs top", what: "Bestenliste – wer ist am besten?" },
    ],
    tip: "Du kannst mehrere Jobs gleichzeitig haben – probier verschiedene aus!",
  },
  {
    name: "VillagerMarket",
    category: "💰 Geld & Handel",
    icon: ShoppingBag,
    emoji: "🛍️",
    color: "bg-pink-400",
    oneLiner: "Eröffne deinen eigenen Shop – mit einem echten Dorfbewohner als Verkäufer!",
    story:
      "Du hast zu viele Kartoffeln? Verkauf sie! Du kaufst dir einen Villager-Shop, legst Items rein, bestimmst die Preise – und andere Spieler kaufen direkt bei deinem Dorfbewohner. Du verdienst Geld, sogar wenn du offline bist!",
    howTo: [
      "Geh zum Shop-Bereich auf dem Spawn",
      "Kaufe einen Villager mit /vm shop",
      "Klicke auf 'Edit' und füge Items hinzu",
      "Setze Preise – nicht zu teuer, sonst kauft niemand!",
    ],
    commands: [
      { cmd: "/vm shop", what: "kauft & öffnet deinen Shop" },
      { cmd: "/vm edit", what: "bearbeite Items und Preise" },
    ],
    tip: "Schreib ein lustiges Schild über deinen Shop, damit alle reinschauen!",
  },
  {
    name: "Pfandsystem",
    category: "💰 Geld & Handel",
    icon: Coins,
    emoji: "🥤",
    color: "bg-emerald-400",
    oneLiner: "Wie im echten Leben: Flaschen abgeben und Geld zurück bekommen!",
    story:
      "Sammelst du leere Glasflaschen? Bring sie zum Pfand-Automaten und bekomm Münzen dafür. Eine super coole Eigenentwicklung von uns – nur auf RSU Network!",
    howTo: [
      "Sammle Pfand-Items (z.B. leere Flaschen)",
      "Suche den Pfandautomaten am Spawn",
      "Lege die Items rein – Klick – Geld auf dem Konto!",
    ],
    tip: "Recycling lohnt sich auch in Minecraft 🌱",
  },
  {
    name: "BlueMap",
    category: "🌍 Welt & Reisen",
    icon: MapIcon,
    emoji: "🗺️",
    color: "bg-cyan-400",
    oneLiner: "Sieh die ganze Welt als 3D-Karte im Browser – sogar vom Handy!",
    story:
      "Du bist in der Schule und willst sehen, was deine Freunde gerade bauen? Öffne BlueMap im Internet-Browser und entdecke die Welt von oben! Du kannst zoomen, drehen und siehst sogar, wo deine Lands sind.",
    howTo: [
      "Öffne den BlueMap-Link auf der Webseite",
      "Klicke und ziehe, um dich umzuschauen",
      "Mit dem Mausrad kannst du zoomen",
    ],
    tip: "Such dein Land aus der Vogelperspektive – sieht es nicht riesig aus?",
    link: "https://bluemap.bluecolored.de/wiki/",
  },
  {
    name: "TeleportStructure",
    category: "🌍 Welt & Reisen",
    icon: Compass,
    emoji: "🧭",
    color: "bg-teal-400",
    oneLiner: "Finde Dörfer, Tempel und coole Strukturen blitzschnell!",
    story:
      "Du suchst ein Dorf, aber findest keins? Mit diesem Plugin kannst du dich zu Strukturen wie Dörfern, Wüstentempeln oder Festungen teleportieren lassen.",
    howTo: [
      "Schreibe /teleportstructure village",
      "Du wirst direkt zur nächsten Struktur gebracht!",
    ],
    commands: [
      { cmd: "/teleportstructure village", what: "zum nächsten Dorf" },
      { cmd: "/teleportstructure desert_pyramid", what: "zur Wüstenpyramide" },
    ],
  },
  {
    name: "EnhancedRails",
    category: "🌍 Welt & Reisen",
    icon: TramFront,
    emoji: "🚂",
    color: "bg-red-400",
    oneLiner: "Loren fahren endlich schnell und weit – wie eine echte Eisenbahn!",
    story:
      "Normale Loren stoppen ständig. Mit EnhancedRails fahren sie viel weiter, schneller und du kannst riesige Bahnstrecken bauen, die wirklich Spaß machen.",
    howTo: [
      "Bau eine Schienenstrecke wie immer",
      "Setz dich rein – und ab geht's!",
    ],
    tip: "Bau einen Bahnhof am Spawn – jeder wird ihn lieben!",
  },
  {
    name: "AutoTotem",
    category: "🛡️ Schutz",
    icon: Heart,
    emoji: "❤️",
    color: "bg-rose-400",
    oneLiner: "Dein Totem rüstet sich automatisch nach – nie wieder sterben!",
    story:
      "Hast du Totems der Unsterblichkeit? AutoTotem packt automatisch ein neues in deine zweite Hand, wenn das alte verbraucht wird. So überlebst du jeden Kampf!",
    howTo: [
      "Hab Totems in deinem Inventar",
      "Schreibe /autototem zum An-/Ausschalten",
      "Fertig – das Plugin macht den Rest",
    ],
    commands: [
      { cmd: "/autototem", what: "Totem-Auto an oder aus" },
    ],
  },
  {
    name: "PvPManager",
    category: "🛡️ Schutz",
    icon: Swords,
    emoji: "⚔️",
    color: "bg-purple-400",
    oneLiner: "Faires Kämpfen – und du kannst PvP komplett ausschalten!",
    story:
      "Du willst in Ruhe bauen und nicht angegriffen werden? Schalte PvP einfach aus! Wenn du doch kämpfen willst, schalte es wieder an. Niemand kann dich austricksen, indem er einfach offline geht.",
    howTo: [
      "/pvp toggle – schaltet Kämpfen an oder aus",
      "Frische Spieler haben automatisch Schutz!",
    ],
    commands: [
      { cmd: "/pvp toggle", what: "Kampf-Modus an/aus" },
      { cmd: "/pvp", what: "zeigt deinen aktuellen Status" },
    ],
  },
  {
    name: "PetProtector",
    category: "🛡️ Schutz",
    icon: PawPrint,
    emoji: "🐶",
    color: "bg-amber-400",
    oneLiner: "Niemand kann deine Haustiere verletzen – versprochen!",
    story:
      "Dein Hund, deine Katze, dein Pferd – alle sind sicher. Andere Spieler können sie nicht aus Spaß töten. Endlich Frieden für deine Lieblinge! 🐾",
    howTo: [
      "Zähme ein Tier wie immer (Knochen für Wölfe, Fisch für Katzen…)",
      "Es ist automatisch geschützt – nichts mehr zu tun!",
    ],
  },
  {
    name: "ImageFrame",
    category: "🎮 Spaß & Action",
    icon: ImageIcon,
    emoji: "🖼️",
    color: "bg-fuchsia-400",
    oneLiner: "Mache aus echten Bildern Wandbilder im Spiel!",
    story:
      "Du willst dein Lieblingsbild oder ein Meme an deine Wand hängen? ImageFrame macht's möglich! Sogar GIFs, die sich bewegen, kannst du benutzen.",
    howTo: [
      "Frag einen Mod, dein Bild hochzuladen",
      "Mit /imageframe select wählst du es aus",
      "Mit /imageframe place hängst du es auf",
    ],
    commands: [
      { cmd: "/imageframe select", what: "wähle dein Bild" },
      { cmd: "/imageframe place", what: "hänge es auf eine Wand" },
    ],
  },
  {
    name: "HeadDatabase",
    category: "🎮 Spaß & Action",
    icon: Crown,
    emoji: "🗿",
    color: "bg-indigo-400",
    oneLiner: "Tausende coole Köpfe zum Bauen – Möbel, Tiere, Promis!",
    story:
      "Du brauchst eine Couch? Einen Hamburger? Einen Pinguin-Kopf? Mit /hdb öffnest du eine riesige Auswahl an Köpfen für deine Builds. Deine Welt wird viel detaillierter!",
    howTo: [
      "Schreibe /hdb",
      "Klick durch die Kategorien (Tiere, Essen, Möbel…)",
      "Kopf nehmen und platzieren – fertig!",
    ],
    commands: [
      { cmd: "/hdb", what: "öffnet die Kopf-Datenbank" },
    ],
    tip: "Tipp: Kombiniere Köpfe mit Treppen für mega-realistische Möbel!",
  },
  {
    name: "LibsDisguises",
    category: "🎮 Spaß & Action",
    icon: Wand2,
    emoji: "🎭",
    color: "bg-violet-400",
    oneLiner: "Verkleide dich als Creeper, Wolf oder sogar als ein anderer Spieler!",
    story:
      "Stell dir vor, du erscheinst plötzlich als Riesen-Enderman vor deinen Freunden! Mit Verkleidungen kannst du Streiche spielen oder bei Events mitmachen. Manchmal gibt's das als Belohnung!",
    howTo: [
      "/disguise creeper – BOOM, du bist ein Creeper!",
      "/undisguise – wieder normal werden",
    ],
    commands: [
      { cmd: "/disguise creeper", what: "wirst zum Creeper" },
      { cmd: "/disguise wolf", what: "wirst zum Wolf" },
      { cmd: "/undisguise", what: "wieder du selbst" },
    ],
  },
  {
    name: "Emotecraft",
    category: "🎮 Spaß & Action",
    icon: Smile,
    emoji: "💃",
    color: "bg-yellow-300",
    oneLiner: "Tanze, winke und mache lustige Bewegungen!",
    story:
      "Hi sagen mit einem Winken? Vor Freude tanzen, weil du Diamanten gefunden hast? Mit Emotecraft kann dein Charakter richtig coole Bewegungen machen, die alle anderen sehen.",
    howTo: [
      "Drücke 'B' im Spiel (oder die Emote-Taste)",
      "Wähle eine Animation aus",
      "Schau, wie alle lachen!",
    ],
    tip: "Funktioniert am besten mit dem Emotecraft-Mod im Client.",
  },
  {
    name: "SuperCodes",
    category: "🎮 Spaß & Action",
    icon: KeyRound,
    emoji: "🎁",
    color: "bg-lime-400",
    oneLiner: "Geheime Codes eingeben und Belohnungen abstauben!",
    story:
      "Manchmal verteilen wir auf Discord oder bei Events Codes. Schreib sie im Spiel ein und bekomm Items, Geld oder besondere Sachen!",
    howTo: [
      "Code aus Discord oder Event merken",
      "/redeem <CODE> eingeben",
      "Belohnung einsacken! 🎉",
    ],
    commands: [
      { cmd: "/redeem GEHEIM2026", what: "löst einen Code ein" },
    ],
  },
  {
    name: "ClickVillagers",
    category: "🎮 Spaß & Action",
    icon: HandCoins,
    emoji: "🧑‍🌾",
    color: "bg-green-300",
    oneLiner: "Tausche mit Dorfbewohnern – einfacher und schneller!",
    story:
      "Mit einem Klick siehst du sofort alle Trades von einem Villager und kannst auch mehrere Items auf einmal tauschen. Kein lästiges Einzelklicken mehr!",
    howTo: [
      "Rechtsklick auf einen Villager",
      "Wähle den Trade aus",
      "Stelle die Anzahl ein und tausche!",
    ],
  },
  {
    name: "Fullbright",
    category: "🌍 Welt & Reisen",
    icon: Sun,
    emoji: "💡",
    color: "bg-yellow-400",
    oneLiner: "Sieh in dunklen Höhlen ALLES – ohne Fackeln zu setzen!",
    story:
      "Höhlen sind gruselig dunkel? Schalte Fullbright ein und alles ist taghell! Perfekt zum Erz suchen, ohne ständig Fackeln zu basteln.",
    howTo: [
      "/fullbright eingeben",
      "Die Welt wird hell – Mining-Zeit!",
    ],
    commands: [
      { cmd: "/fullbright", what: "Helligkeit auf Maximum" },
    ],
  },
  {
    name: "InvisibleItemFrames",
    category: "🎮 Spaß & Action",
    icon: Frame,
    emoji: "🪟",
    color: "bg-slate-300",
    oneLiner: "Lass deinen Item-Rahmen unsichtbar werden – nur das Item schwebt!",
    story:
      "Du willst ein Schwert an die Wand hängen, aber der hässliche Rahmen stört? Mache ihn unsichtbar! Sieht aus, als würde das Item magisch in der Luft schweben.",
    howTo: [
      "Item-Rahmen platzieren",
      "Mit Shift + Rechtsklick unsichtbar machen",
    ],
  },
  {
    name: "HiddenArmor",
    category: "🎮 Spaß & Action",
    icon: EyeOff,
    emoji: "👕",
    color: "bg-gray-400",
    oneLiner: "Trage deine Lieblings-Klamotten – auch mit Rüstung!",
    story:
      "Du willst dein cooles Skin-Outfit zeigen, aber brauchst auch deine Diamant-Rüstung? Verstecke die Rüstung – du bist trotzdem geschützt, siehst aber stylisch aus!",
    howTo: [
      "/hiddenarmor toggle – Rüstung verschwindet visuell",
    ],
    commands: [
      { cmd: "/hiddenarmor", what: "Rüstung sichtbar/unsichtbar" },
    ],
  },
  {
    name: "InventoryRollbackPlus",
    category: "🛡️ Schutz",
    icon: Rewind,
    emoji: "⏪",
    color: "bg-sky-400",
    oneLiner: "Dein Inventar verloren? Ein Mod kann es zurückholen!",
    story:
      "Du bist im Lava gestorben mit allen Diamanten? Keine Panik! Frag einen Mod, der kann dein Inventar von vorher wiederherstellen. Wie eine Zeitreise!",
    howTo: [
      "Schreib einen Mod auf Discord oder mit /msg",
      "Sag, wann du gestorben bist",
      "Mod stellt es wieder her",
    ],
    tip: "Funktioniert nur mit Mod-Hilfe – nicht selber ausführbar.",
  },
  {
    name: "PlayTimePulse",
    category: "💬 Chat & Hilfe",
    icon: Clock,
    emoji: "⏰",
    color: "bg-blue-300",
    oneLiner: "Schau, wie lange du schon auf dem Server gespielt hast!",
    story:
      "Bist du schon 100 Stunden online? Oder erst 10? Mit /playtime siehst du genau, wie viel Zeit du auf RSU Network verbracht hast. Stolz sein erlaubt!",
    howTo: [
      "/playtime eingeben",
      "Stunden bewundern 😎",
    ],
    commands: [
      { cmd: "/playtime", what: "deine Spielzeit" },
      { cmd: "/playtime top", what: "Bestenliste" },
    ],
  },
  {
    name: "CalcMod",
    category: "💬 Chat & Hilfe",
    icon: Calculator,
    emoji: "🧮",
    color: "bg-orange-300",
    oneLiner: "Ein eingebauter Taschenrechner im Chat!",
    story:
      "Du willst wissen, wie viele Stacks 1728 Blöcke sind? Tippe einfach im Chat /calc 1728 / 64 und du hast die Antwort sofort.",
    howTo: [
      "/calc <Rechnung> eingeben",
      "Antwort erscheint im Chat",
    ],
    commands: [
      { cmd: "/calc 12*8", what: "rechnet 12 mal 8" },
      { cmd: "/calc 1728/64", what: "wie viele Stacks?" },
    ],
  },
  {
    name: "PlayerBorrow",
    category: "💰 Geld & Handel",
    icon: HandCoins,
    emoji: "🤝",
    color: "bg-amber-300",
    oneLiner: "Leihe Geld von Freunden – fair und sicher!",
    story:
      "Du brauchst dringend 500 Münzen für ein Item, hast aber gerade keine? Frag einen Freund, ob er dir was leiht. Das Plugin merkt sich alles, damit niemand vergessen kann zurückzuzahlen.",
    howTo: [
      "/borrow <Spieler> <Betrag>",
      "Wenn er bestätigt, hast du das Geld",
      "Zurückzahlen mit /repay",
    ],
    commands: [
      { cmd: "/borrow Max 500", what: "leihe 500 von Max" },
      { cmd: "/repay Max 500", what: "zahle Max zurück" },
    ],
  },
  {
    name: "DonutOrder",
    category: "💰 Geld & Handel",
    icon: ShoppingBag,
    emoji: "🍩",
    color: "bg-pink-300",
    oneLiner: "Bestelle Items wie in einem Online-Shop!",
    story:
      "Du brauchst 10 Stacks Stein, hast aber keine Lust selbst abzubauen? Stelle eine Bestellung – andere Spieler können sie erfüllen und du bekommst die Items geliefert.",
    howTo: [
      "/order erstellen",
      "Item und Menge wählen",
      "Preis festlegen, andere liefern",
    ],
  },
  {
    name: "CommandPanels",
    category: "💬 Chat & Hilfe",
    icon: LayoutGrid,
    emoji: "📋",
    color: "bg-cyan-300",
    oneLiner: "Klick statt Tippen – schöne Menüs für alles!",
    story:
      "Du musst dir keine Befehle merken! Viele Sachen findest du in coolen Klick-Menüs. Einfach öffnen, anklicken, fertig.",
    howTo: [
      "/menu oder /panels eingeben",
      "Durch die Symbole klicken",
    ],
    commands: [
      { cmd: "/menu", what: "öffnet das Hauptmenü" },
    ],
  },
  {
    name: "DiscordSRV",
    category: "💬 Chat & Hilfe",
    icon: MessageSquare,
    emoji: "💬",
    color: "bg-indigo-300",
    oneLiner: "Chatte mit Spielern – auch wenn du auf Discord bist!",
    story:
      "Du bist gerade nicht im Spiel, aber willst trotzdem mit deinen Freunden quatschen? Alles, was im Minecraft-Chat geschrieben wird, siehst du auch auf Discord – und umgekehrt!",
    howTo: [
      "Tritt unserem Discord bei",
      "Im Channel #ingame-chat siehst du alles live",
      "Schreib zurück – Spieler im Spiel sehen deine Nachricht!",
    ],
    tip: "Mega praktisch, wenn du auf dem Handy unterwegs bist!",
  },
  {
    name: "Geyser + Floodgate",
    category: "📱 Handy & Crossplay",
    icon: Smartphone,
    emoji: "📱",
    color: "bg-emerald-300",
    oneLiner: "Spiele mit Handy, Switch, Xbox oder PlayStation mit!",
    story:
      "Du hast kein Java-Minecraft, sondern die Bedrock-Version auf dem Handy oder der Konsole? Kein Problem! Du kannst trotzdem auf unserem Server spielen. Magie? Nein – Geyser & Floodgate!",
    howTo: [
      "Bedrock öffnen → Server hinzufügen",
      "Adresse: mc.rsu.network – Port: 19132",
      "Verbinden – fertig!",
    ],
    link: "https://geysermc.org/wiki/",
  },
  {
    name: "ViaVersion + ViaBackwards",
    category: "📱 Handy & Crossplay",
    icon: Gamepad2,
    emoji: "🎮",
    color: "bg-purple-300",
    oneLiner: "Spiele mit FAST jeder Minecraft-Version – egal ob alt oder neu!",
    story:
      "Du hast Minecraft 1.20, dein Freund hat 1.21 – kein Problem! Beide können zusammen spielen. Das Plugin übersetzt alles automatisch.",
    howTo: [
      "Einfach mit deiner Version verbinden",
      "Spielen!",
    ],
  },
];

const categories: ("Alle" | Cat)[] = [
  "Alle",
  "🏠 Mein Zuhause",
  "💰 Geld & Handel",
  "🛡️ Schutz",
  "🌍 Welt & Reisen",
  "🎮 Spaß & Action",
  "📱 Handy & Crossplay",
  "💬 Chat & Hilfe",
];

const PluginsKids = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("Alle");
  const [query, setQuery] = useState("");

  const filtered = plugins.filter((p) => {
    const matchCat = active === "Alle" || p.category === active;
    const q = query.trim().toLowerCase();
    const matchQ =
      q === "" ||
      p.name.toLowerCase().includes(q) ||
      p.oneLiner.toLowerCase().includes(q) ||
      p.story.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      {/* Hero */}
      <section className="container pt-32 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block text-6xl mb-4 animate-bounce">🎮</div>
          <SectionHeader
            eyebrow="Plugins für Kinder erklärt"
            number="K1"
            align="center"
            title={
              <>
                Was kann ich auf{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                  RSU Network
                </span>{" "}
                alles machen?
              </>
            }
            description="Hier erklären wir dir alle Plugins ganz einfach – mit Schritt-für-Schritt Anleitungen, Befehlen und Tipps. Such dir aus, was dich interessiert!"
          />
        </div>

        {/* Search & Categories */}
        <div className="mt-10 flex flex-col gap-4 items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Suche, z.B. 'Truhe' oder 'Haus'…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-12 text-base rounded-2xl border-2"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all border-2 ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary scale-105 shadow-lg"
                    : "bg-card border-border text-foreground hover:scale-105 hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plugin Cards */}
      <section className="container pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.name}
                className="p-6 border-4 border-[hsl(220_40%_15%)] rounded-3xl bg-card hover:-translate-y-2 hover:rotate-[-1deg] transition-all duration-300 shadow-[6px_6px_0_hsl(220_40%_15%)] hover:shadow-[10px_10px_0_hsl(220_40%_15%)] flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className={`h-14 w-14 rounded-2xl ${p.color} flex items-center justify-center text-2xl border-2 border-[hsl(220_40%_15%)] shrink-0`}>
                    {p.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {p.name}
                      </h3>
                    </div>
                    <Badge variant="outline" className="mt-1 text-[10px] border-2">
                      {p.category}
                    </Badge>
                  </div>
                </div>

                {/* One liner */}
                <p className="mt-4 font-bold text-base text-foreground">
                  {p.oneLiner}
                </p>

                {/* Story */}
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.story}
                </p>

                {/* How to */}
                <div className="mt-4 rounded-2xl bg-muted/60 p-4 border-2 border-border">
                  <div className="font-bold text-xs uppercase tracking-wider text-primary mb-2 flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> So geht's
                  </div>
                  <ol className="space-y-1.5 text-sm text-foreground/90">
                    {p.howTo.map((step, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="font-bold text-primary shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Commands */}
                {p.commands && p.commands.length > 0 && (
                  <div className="mt-3 space-y-1.5">
                    <div className="font-bold text-xs uppercase tracking-wider text-foreground/70">
                      Befehle
                    </div>
                    {p.commands.map((c) => (
                      <div key={c.cmd} className="flex flex-wrap items-center gap-2 text-xs">
                        <code className="px-2 py-1 rounded bg-[hsl(220_40%_15%)] text-white font-mono">
                          {c.cmd}
                        </code>
                        <span className="text-muted-foreground">{c.what}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tip */}
                {p.tip && (
                  <div className="mt-4 rounded-2xl bg-accent/20 border-2 border-accent p-3 text-sm font-medium text-foreground">
                    💡 {p.tip}
                  </div>
                )}

                {/* Link */}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    Mehr im Wiki <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground text-lg">
            🔍 Hmm, da hab ich nichts gefunden. Probier ein anderes Wort!
          </div>
        )}

        {/* Help CTA */}
        <div className="mt-16 max-w-2xl mx-auto text-center rounded-3xl border-4 border-[hsl(220_40%_15%)] bg-gradient-to-br from-primary/20 to-secondary/20 p-8 shadow-[8px_8px_0_hsl(220_40%_15%)]">
          <div className="text-5xl mb-3">🤔</div>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Noch Fragen?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Kein Problem! Frag einfach im Discord oder direkt im Spiel – wir helfen dir gerne!
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button variant="hero" asChild>
              <a href="https://discord.gg/hQP6ybWCHe" target="_blank" rel="noopener noreferrer">
                💬 Discord beitreten
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/plugins">🔧 Profi-Übersicht</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PluginsKids;
