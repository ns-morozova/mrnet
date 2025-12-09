import { type HTMLAttributes } from "react";

type H2HeadProps = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const H2Head = ({ children, className = "", ...props }: H2HeadProps) => {
  return (
    <h2
      className={`
        uppercase font-normal
        text-2xl leading-8 tracking-[0.05em]
        md:text-[32px] md:leading-10
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2Head;
