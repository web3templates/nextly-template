import React from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
