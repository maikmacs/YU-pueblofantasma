import "./GhostDivisor.css";

import React from "react";

import ghost from "../../assets/ghost.gif";

type GhostDivisorProps = {
  repeat: number;
};

export default function GhostDivisor({ repeat }: GhostDivisorProps) {
  const ghostsLine = [];

  for (let i = 0; i < repeat; i++) {
    ghostsLine.push(<img key={i} src={ghost} alt="ghost" />);
  }

  return <div className={"ghost-divisor"}>{ghostsLine}</div>;
}
