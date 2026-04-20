import { corsHeaders } from "@supabase/supabase-js/cors";

const SERVER_HOST = "mc.rsu.network";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const start = Date.now();
    const res = await fetch(`https://api.mcsrvstat.us/3/${SERVER_HOST}`, {
      headers: { "User-Agent": "RSU-Network-Website" },
    });
    const ping = Date.now() - start;

    if (!res.ok) {
      throw new Error(`mcsrvstat.us responded with ${res.status}`);
    }

    const data = await res.json();

    const payload = {
      online: Boolean(data.online),
      host: SERVER_HOST,
      players: {
        online: data.players?.online ?? 0,
        max: data.players?.max ?? 0,
        list: Array.isArray(data.players?.list)
          ? data.players.list.slice(0, 24).map((p: any) => ({
              name: p?.name ?? "Spieler",
              uuid: p?.uuid ?? null,
            }))
          : [],
      },
      version: data.version ?? null,
      protocol: data.protocol?.name ?? null,
      motd: {
        clean: Array.isArray(data.motd?.clean) ? data.motd.clean : [],
      },
      icon: data.icon ?? null,
      ping_ms: ping,
      checked_at: new Date().toISOString(),
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=30",
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return new Response(
      JSON.stringify({
        online: false,
        host: SERVER_HOST,
        error: msg,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
