import { SectionHeader } from "./SectionHeader";

const goals = [
  { img: "/mc/villager-head.png", title: "Teamwork 🤝", text: "Bau riesige Städte mit deinen Freunden – gemeinsam macht's mehr Spaß!", color: "primary" },
  { img: "/mc/emerald.png", title: "Wirtschaft 💎", text: "Handel mit Items, verdien Coins durch Jobs und werde reich.", color: "accent" },
  { img: "/mc/crafting.png", title: "Kreativität 🎨", text: "Lass deiner Fantasie freien Lauf – bau was du willst!", color: "secondary" },
  { img: "/mc/heart.png", title: "Verantwortung ❤️", text: "Fair spielen, anderen helfen und cool miteinander umgehen.", color: "destructive" },
  { img: "/mc/enderman-head.png", title: "Medienkompetenz 📱", text: "Lerne, wie das Internet funktioniert – ganz nebenbei beim Zocken.", color: "primary" },
  { img: "/mc/creeper-render.png", title: "Sicherheit 🛡️", text: "Geschützter Raum, keine Fremden, klare Regeln. Versprochen.", color: "secondary" },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/15 border-primary/40",
  accent: "bg-accent/15 border-accent/40",
  secondary: "bg-secondary/15 border-secondary/40",
  destructive: "bg-destructive/15 border-destructive/40",
};

export const Vision = () => {
  return (
    <section id="vision" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeader
          number="01"
          eyebrow="Warum dieser Server?"
          title={
            <>
              Ein Ort, an dem du <span className="text-gradient-brand">selbst</span>{" "}
              gestalten kannst – ohne Werbung oder Fremde.
            </>
          }
          description="RSU Network ist kein riesiger anonymer Public-Server. Hier kennst du die Leute, mit denen du spielst – und das Ganze wird von Schülern selbst betreut, in Absprache mit IT-Lehrkräften."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {goals.map((g, i) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-3xl border-4 border-foreground/15 bg-gradient-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:rotate-[-1deg] hover:border-primary hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-none border-2 ${colorMap[g.color]} shadow-md`}>
                  <img src={g.img} alt="" aria-hidden className="h-10 w-10 pixelated" />
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
