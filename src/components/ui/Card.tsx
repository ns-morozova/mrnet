import type { ReactNode } from "react";

type CardAccent = "flame" | "aqua" | "lilac";

interface CardProps {
  title: string;
  description: string;
  accent?: CardAccent;
  eyebrow?: string;
  action?: ReactNode;
}

const accentRing: Record<CardAccent, string> = {
  flame: "border-accent-flame",
  aqua: "border-accent-aqua",
  lilac: "border-accent-lilac",
};

const Card = ({
  title,
  description,
  accent = "flame",
  eyebrow,
  action,
}: CardProps) => (
  <article className={`flex h-full flex-col gap-4 rounded-2xl border border-stroke bg-surface/60 p-6 ${accentRing[accent]}`}>
    {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-white/60">{eyebrow}</p>}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/70">{description}</p>
    </div>
    {action && <div className="mt-auto pt-2">{action}</div>}
  </article>
);

export default Card;
