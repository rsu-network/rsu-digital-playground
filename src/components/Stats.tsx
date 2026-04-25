const stats = [
  { img: "/mc/grass.png", value: "1.21.x", label: "Java Edition", color: "border-primary/40 bg-primary/10" },
  { img: "/mc/diamond-ore.png", value: "<50ms", label: "Ping aus DE", color: "border-secondary/40 bg-secondary/10" },
  { img: "/mc/emerald.png", value: "EU", label: "Frankfurt", color: "border-primary/40 bg-primary/10" },
  { img: "/mc/gold.png", value: "24/7", label: "Online", color: "border-accent/40 bg-accent/10" },
];

export const Stats = () => {
  return (
    <section className="relative py-12 border-y-2 border-border/60 bg-card/40 backdrop-blur">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className={`flex h-14 w-14 items-center justify-center rounded-none border-2 ${s.color} shadow-sm`}>
                <img src={s.img} alt="" aria-hidden className="h-9 w-9 pixelated" />
              </div>
              <div>
                <div className="font-pixel text-base sm:text-lg text-foreground tabular-nums">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
