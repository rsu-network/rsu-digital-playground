import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Activity, Users, Wifi, Server } from "lucide-react";

interface ServerStatus {
  online: boolean;
  host: string;
  players: {
    online: number;
    max: number;
    list: { name: string; uuid: string | null }[];
  };
  version?: string | null;
  motd?: { clean: string[] };
  ping_ms?: number;
  error?: string;
}

export const ServerStatus = () => {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("server-status");
      if (error) throw error;
      setStatus(data as ServerStatus);
    } catch {
      setStatus({
        online: false,
        host: "mc.rsu.network",
        players: { online: 0, max: 0, list: [] },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    const id = setInterval(fetchStatus, 60_000);
    return () => clearInterval(id);
  }, []);

  const isOnline = status?.online ?? false;
  const motdLine = status?.motd?.clean?.filter(Boolean).join(" · ");

  return (
    <section id="status" className="relative py-20 sm:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-6 sm:p-10 shadow-card">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-3 gap-8">
            {/* Left: status */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Live Server Status
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium border ${
                    isOnline
                      ? "bg-primary/10 text-primary border-primary/40"
                      : "bg-destructive/10 text-destructive border-destructive/40"
                  }`}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    {isOnline && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                        isOnline ? "bg-primary" : "bg-destructive"
                      }`}
                    />
                  </span>
                  {loading ? "Wird geprüft …" : isOnline ? "Online" : "Offline"}
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-foreground">
                <span className="font-mono text-gradient-brand">
                  {status?.host ?? "mc.rsu.network"}
                </span>
              </h2>
              {motdLine && (
                <p className="mt-3 text-muted-foreground italic">
                  „{motdLine}"
                </p>
              )}

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <StatBox
                  icon={Users}
                  label="Spieler"
                  value={
                    isOnline
                      ? `${status?.players.online ?? 0} / ${status?.players.max ?? 0}`
                      : "—"
                  }
                />
                <StatBox
                  icon={Server}
                  label="Version"
                  value={status?.version ?? "—"}
                />
                <StatBox
                  icon={Wifi}
                  label="Ping"
                  value={status?.ping_ms ? `${status.ping_ms} ms` : "—"}
                />
                <StatBox
                  icon={Activity}
                  label="Status"
                  value={isOnline ? "Aktiv" : "Down"}
                />
              </div>
            </div>

            {/* Right: player list */}
            <div className="rounded-2xl border border-border bg-background/50 p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Aktuell online
              </p>
              <div className="mt-4">
                {!isOnline || (status?.players.list.length ?? 0) === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    {isOnline
                      ? "Niemand online — sei der Erste!"
                      : "Server nicht erreichbar."}
                  </p>
                ) : (
                  <ul className="grid grid-cols-2 gap-2">
                    {status!.players.list.map((p) => (
                      <li
                        key={p.name}
                        className="flex items-center gap-2 rounded-lg border border-border bg-card/60 px-2 py-1.5"
                      >
                        <img
                          src={`https://mc-heads.net/avatar/${encodeURIComponent(
                            p.name,
                          )}/24`}
                          alt={p.name}
                          width={24}
                          height={24}
                          className="rounded-sm"
                          loading="lazy"
                        />
                        <span className="truncate text-xs text-foreground">
                          {p.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) => (
  <div className="rounded-xl border border-border bg-background/50 p-4">
    <div className="flex items-center gap-2 text-muted-foreground">
      <Icon size={14} />
      <span className="text-[10px] uppercase tracking-wider">{label}</span>
    </div>
    <div className="mt-1 font-display text-lg font-semibold text-foreground tabular-nums truncate">
      {value}
    </div>
  </div>
);
