import { Cpu, Globe, Clock, Wifi } from "lucide-react";

const stats = [
  { icon: Cpu, value: "1.21.x", label: "Java Edition" },
  { icon: Wifi, value: "<50ms", label: "Ping aus DE" },
  { icon: Globe, value: "EU", label: "Frankfurt" },
  { icon: Clock, value: "24/7", label: "Online" },
];

export const Stats = () => {
  return (
    <section className="relative py-12 border-y border-border/60 bg-card/30 backdrop-blur">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <s.icon size={20} />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground tabular-nums">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
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
