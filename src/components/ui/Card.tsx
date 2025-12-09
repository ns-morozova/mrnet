import { type HTMLAttributes } from "react";

type FeatureCardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

const Card = ({ children, className = "", ...props }: FeatureCardProps) => {
  return (
    <div
      className={`
        relative flex flex-col justify-between min-h-55
        border border-accent-aqua rounded-lg
        bg-black
        bg-[radial-gradient(120%_120%_at_100%_0%,rgba(0,228,240,0.55)_0%,rgba(0,0,0,0)_60%)]
        p-4 md:p-5
        overflow-hidden
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
