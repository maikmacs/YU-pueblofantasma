import React from "react";

import MerchItem, { MerchItemProps } from "../../../../components/MerchItem";

interface MerchProps {
  items: MerchItemProps[];
}

export default function Merch({ items }: MerchProps) {
  return (
    <div>
      {items.map((item, index) => {
        return <MerchItem key={index} name={item.name} img={item.img} link={item.link} />;
      })}
    </div>
  );
}
