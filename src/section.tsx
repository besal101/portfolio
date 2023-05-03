import React from "react";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ className, children, id }) => {
  return (
    <section className={className} id={id}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
