import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  number?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  number,
}: SectionHeaderProps) => (
  <div
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <div
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      {number && (
        <span className="font-mono text-xs text-primary tabular-nums">
          {number}
        </span>
      )}
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {eyebrow}
      </span>
    </div>
    <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-foreground">
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
    )}
  </div>
);
