import "./footer.css";

import React from "react";

import stayFinal from "../../assets/stay-final.png";
import yuIG from "../../assets/young_IG.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/young_ultra/" target="_blank" rel="noopener noreferrer">
        <img src={yuIG} alt="final" />
      </a>
      <img src={stayFinal} alt="young-ultra-IG" />
    </div>
  );
}
