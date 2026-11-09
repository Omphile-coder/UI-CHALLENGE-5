import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/** Keeps sections aligned to a shared max width while letting callers supply their own layout class. */
export const ContentContainer = ({ children, className }: Props) => {
  return (
    <div
      className={className}
      style={{ maxWidth: 1105, padding: 5, margin: "0 auto" }}
    >
      {children}
    </div>
  );
};
