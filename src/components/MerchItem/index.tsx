import "./merchItem.css";

import React from "react";

import comprarBtn from "../../assets/comprar-boton.png";

export type MerchItemProps = {
  name: string;
  img: string;
  link: string;
};

export default function MerchItem({ name, img, link }: MerchItemProps) {
  return (
    <div className="merch-item">
      <img src={img} id={`item-${name}`} alt={`item-${name}`} />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={comprarBtn} />
      </a>
    </div>
  );
}
