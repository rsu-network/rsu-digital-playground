import { Cpu, Globe, Clock, Wifi } from "lucide-react";

const stats = [
  { icon: Cpu, value: "1.21.x", label: "Java Edition", color: "bg-primary/15 text-primary border-primary/30" },
  { icon: Wifi, value: "<50ms", label: "Ping aus DE", color: "bg-secondary/15 text-secondary border-secondary/30" },
  { icon: Globe, value: "EU", label: "Frankfurt", color: "bg-accent/15 text-accent border-accent/30" },
  { icon: Clock, value: "24/7", label: "Online", color: "bg-destructive/15 text-destructive border-destructive/30" },
];

export const Stats = () => {
  return (
    <section className="relative py-12 border-y border-border/60 bg-card/30 backdrop-blur">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 ${s.color}`}>
                <s.icon size={20} />
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
