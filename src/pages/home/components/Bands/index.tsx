import "./bands.css";

import React from "react";

type BandType = {
  name: string;
};

interface BandsProps {
  items: BandType[];
}

export default function Bands({ items }: BandsProps) {
  return (
    <ul className="bands">
      {items.map((band, index) => {
        return <li key={index}>{band.name}</li>;
      })}
    </ul>
  );
}
