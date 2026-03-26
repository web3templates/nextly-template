import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  idName?: string;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      id={props.idName || undefined}
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

