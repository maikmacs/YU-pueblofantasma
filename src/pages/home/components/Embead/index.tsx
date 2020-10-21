import "./Embead.css";

import React from "react";

type EmbeadProps = {
  url: string;
};

export default function Embead({ url }: EmbeadProps) {
  return (
    <div className={"embead-player"}>
      <iframe
        width="100%"
        height="90%"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
