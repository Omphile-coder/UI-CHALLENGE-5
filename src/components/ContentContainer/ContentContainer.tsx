import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ContentContainer = ({ children, className }: Props) => {
  return (
    <div className={className} style={{ maxWidth: 1105, padding: 5 }}>
      {children}
    </div>
  );
};
