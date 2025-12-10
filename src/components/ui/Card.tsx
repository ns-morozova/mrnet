import { type HTMLAttributes } from "react";

type CardVariant = "aqua" | "flame";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  aqua: `
    border-accent-aqua
    bg-[radial-gradient(120%_120%_at_100%_0%,rgba(0,228,240,0.55)_0%,rgba(0,0,0,0)_60%)]
  `,
  flame: `
    border-accent-flame
    bg-[radial-gradient(120%_120%_at_100%_0%,rgba(255,76,0,0.55)_0%,rgba(0,0,0,0)_60%)]
  `,
};

const Card = ({
  children,
  variant = "aqua",
  className = "",
  ...props
}: CardProps) => {
  const baseClasses = `
    relative flex flex-col justify-between min-h-55
    border rounded-lg
    bg-black
    p-4 md:p-5 overflow-hidden
  `;

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
