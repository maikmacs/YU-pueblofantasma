import "./Embead.css";

import React from "react";

type EmbeadProps = {
  url: string;
};

export default function Embead({ url }: EmbeadProps) {
  return (
    <div className={"embead-player"}>
      <iframe
        title="Pueblo Fantasma 3000"
        width="100%"
        height="100%"
        src={url + "?autoplay=1"}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
}
