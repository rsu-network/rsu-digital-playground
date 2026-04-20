import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";
import {
  Mail,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import type { Session } from "@supabase/supabase-js";
import { z } from "zod";

const ALLOWED_DOMAIN = "@rsu-germering.de";

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email({ message: "Bitte eine gültige Email eingeben" })
  .max(255)
  .refine((v) => v.endsWith(ALLOWED_DOMAIN), {
    message: `Nur Schul-Emails (${ALLOWED_DOMAIN}) sind erlaubt`,
  });

const applicationSchema = z.object({
  minecraft_username: z
    .string()
    .trim()
    .min(3, "Minecraft Name muss mindestens 3 Zeichen haben")
    .max(16, "Minecraft Name darf max. 16 Zeichen haben")
    .regex(/^[A-Za-z0-9_]+$/, "Nur Buchstaben, Zahlen und _ erlaubt"),
  class_grade: z.string().trim().min(1, "Bitte deine Klasse angeben").max(20),
  reason: z.string().trim().max(500).optional(),
});

interface Application {
  id: string;
  minecraft_username: string;
  class_grade: string | null;
  reason: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

const Whitelist = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);

  // Login form
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  // Application form
  const [mcName, setMcName] = useState("");
  const [classGrade, setClassGrade] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Auth listener (set up BEFORE getSession)
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load application when logged in
  useEffect(() => {
    if (!session?.user) {
      setApplication(null);
      return;
    }
    supabase
      .from("whitelist_applications")
      .select("id, minecraft_username, class_grade, reason, status, created_at")
      .eq("user_id", session.user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setApplication(data as Application);
      });
  }, [session]);

  const sendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: parsed.data,
      options: {
        emailRedirectTo: `${window.location.origin}/whitelist`,
      },
    });
    setSending(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login-Link wurde an deine Schul-Email geschickt!");
    }
  };

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) return;

    const parsed = applicationSchema.safeParse({
      minecraft_username: mcName,
      class_grade: classGrade,
      reason: reason || undefined,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase
      .from("whitelist_applications")
      .insert({
        user_id: session.user.id,
        email: session.user.email!,
        minecraft_username: parsed.data.minecraft_username,
        class_grade: parsed.data.class_grade,
        reason: parsed.data.reason ?? null,
      })
      .select()
      .maybeSingle();
    setSubmitting(false);

    if (error) {
      toast.error(error.message);
    } else if (data) {
      setApplication(data as Application);
      toast.success("Anmeldung eingereicht!");
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setApplication(null);
    setEmail("");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group"
          >
            <Logo size={32} className="rounded-lg" />
            <span className="font-display font-bold text-foreground">
              RSU Network
            </span>
          </button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft size={14} /> Zurück
          </Button>
        </nav>
      </header>

      <section className="flex-1 py-16 sm:py-24">
        <div className="container max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
            <ShieldCheck size={14} />
            Whitelist-Anmeldung
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Auf die <span className="text-gradient-brand">Whitelist</span>{" "}
            kommen
          </h1>
          <p className="mt-4 text-muted-foreground">
            Der Server ist exklusiv für Schüler der RSU Germering. Melde dich
            mit deiner Schul-Email an, dann kannst du deinen Minecraft-Namen
            für die Whitelist eintragen.
          </p>

          <div className="mt-10 rounded-3xl border border-border bg-gradient-card p-6 sm:p-8 shadow-card">
            {loading ? (
              <p className="text-sm text-muted-foreground">Lade …</p>
            ) : !session ? (
              <LoginForm
                email={email}
                setEmail={setEmail}
                sending={sending}
                onSubmit={sendMagicLink}
              />
            ) : application ? (
              <ApplicationStatus
                application={application}
                email={session.user.email!}
                onLogout={logout}
              />
            ) : (
              <ApplicationForm
                email={session.user.email!}
                mcName={mcName}
                setMcName={setMcName}
                classGrade={classGrade}
                setClassGrade={setClassGrade}
                reason={reason}
                setReason={setReason}
                submitting={submitting}
                onSubmit={submitApplication}
                onLogout={logout}
              />
            )}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Hinweis: Es werden nur die für die Whitelist nötigen Daten
            gespeichert. DSGVO-konform, keine Weitergabe an Dritte.
          </p>
        </div>
      </section>
    </main>
  );
};

const LoginForm = ({
  email,
  setEmail,
  sending,
  onSubmit,
}: {
  email: string;
  setEmail: (v: string) => void;
  sending: boolean;
  onSubmit: (e: React.FormEvent) => void;
}) => (
  <form onSubmit={onSubmit} className="space-y-5">
    <div>
      <h2 className="font-display text-xl font-semibold text-foreground">
        Schritt 1 · Login
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Wir schicken dir einen Login-Link per Email. Kein Passwort nötig.
      </p>
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">Schul-Email</Label>
      <Input
        id="email"
        type="email"
        placeholder={`vorname.nachname${ALLOWED_DOMAIN}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={255}
        autoComplete="email"
      />
      <p className="text-xs text-muted-foreground">
        Nur Adressen mit{" "}
        <span className="font-mono text-primary">{ALLOWED_DOMAIN}</span> werden
        akzeptiert.
      </p>
    </div>

    <Button
      type="submit"
      variant="hero"
      size="lg"
      className="w-full"
      disabled={sending}
    >
      <Mail size={16} />
      {sending ? "Wird gesendet …" : "Login-Link senden"}
    </Button>
  </form>
);

const ApplicationForm = ({
  email,
  mcName,
  setMcName,
  classGrade,
  setClassGrade,
  reason,
  setReason,
  submitting,
  onSubmit,
  onLogout,
}: {
  email: string;
  mcName: string;
  setMcName: (v: string) => void;
  classGrade: string;
  setClassGrade: (v: string) => void;
  reason: string;
  setReason: (v: string) => void;
  submitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onLogout: () => void;
}) => (
  <form onSubmit={onSubmit} className="space-y-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 className="font-display text-xl font-semibold text-foreground">
          Schritt 2 · Anmeldung
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Eingeloggt als{" "}
          <span className="font-mono text-foreground">{email}</span>
        </p>
      </div>
      <Button type="button" variant="ghost" size="sm" onClick={onLogout}>
        <LogOut size={14} />
      </Button>
    </div>

    <div className="space-y-2">
      <Label htmlFor="mc">Minecraft-Name</Label>
      <Input
        id="mc"
        placeholder="z.B. Steve123"
        value={mcName}
        onChange={(e) => setMcName(e.target.value)}
        required
        maxLength={16}
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="class">Klasse</Label>
      <Input
        id="class"
        placeholder="z.B. 8b"
        value={classGrade}
        onChange={(e) => setClassGrade(e.target.value)}
        required
        maxLength={20}
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="reason">Warum willst du dabei sein? (optional)</Label>
      <Textarea
        id="reason"
        placeholder="Erzähl uns kurz warum du auf den Server willst …"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        rows={4}
        maxLength={500}
      />
    </div>

    <Button
      type="submit"
      variant="hero"
      size="lg"
      className="w-full"
      disabled={submitting}
    >
      {submitting ? "Wird gesendet …" : "Anmeldung absenden"}
    </Button>
  </form>
);

const ApplicationStatus = ({
  application,
  email,
  onLogout,
}: {
  application: Application;
  email: string;
  onLogout: () => void;
}) => {
  const cfg = {
    pending: {
      icon: Clock,
      label: "In Prüfung",
      color: "text-accent",
      bg: "bg-accent/10",
      border: "border-accent/40",
      text: "Deine Anmeldung wurde eingereicht. Ein Admin schaut sie sich bald an.",
    },
    approved: {
      icon: CheckCircle2,
      label: "Akzeptiert",
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/40",
      text: "Glückwunsch! Du bist auf der Whitelist und kannst dich auf mc.rsu.network einloggen.",
    },
    rejected: {
      icon: XCircle,
      label: "Abgelehnt",
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/40",
      text: "Deine Anmeldung wurde leider abgelehnt. Frag im Discord nach den Gründen.",
    },
  }[application.status];
  const Icon = cfg.icon;

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Deine Anmeldung
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-mono">{email}</span>
          </p>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={onLogout}>
          <LogOut size={14} />
        </Button>
      </div>

      <div
        className={`rounded-2xl border ${cfg.border} ${cfg.bg} p-5 flex items-start gap-4`}
      >
        <Icon className={cfg.color} size={22} />
        <div>
          <p className={`font-display font-semibold ${cfg.color}`}>
            {cfg.label}
          </p>
          <p className="mt-1 text-sm text-foreground">{cfg.text}</p>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-border bg-background/50 p-4">
          <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Minecraft Name
          </dt>
          <dd className="mt-1 font-mono text-foreground">
            {application.minecraft_username}
          </dd>
        </div>
        <div className="rounded-xl border border-border bg-background/50 p-4">
          <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Klasse
          </dt>
          <dd className="mt-1 font-mono text-foreground">
            {application.class_grade ?? "—"}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Whitelist;
