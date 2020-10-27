import React from "react";

import hatProducto from "../../assets/hat-producto.png";
import teeProducto from "../../assets/tee-producto.png";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import GhostDivisor from "../../components/GhostDivisor";
import Header from "../../components/Header";
import MailChimp from "../../components/MailChimp";
import Bands from "./components/Bands";
import Embead from "./components/Embead";
import Merch from "./components/Merch";
import Title from "./components/Title";

const bandsItems = [
  { name: "Dromedarios mágicos" },
  { name: "Futuremen" },
  { name: "Inés & Washi Hana" },
  { name: "Mango" },
  { name: "Mentira Mentira" },
  { name: "Rey Asco" },
  { name: ".Stendal" },
];

const merchItems = [
  {
    name: "playera",
    img: teeProducto,
    link: "https://shop.youngultra.biz/collections/frontpage/products/pueblo-fantasma-tee ",
  },
  {
    name: "gorra",
    img: hatProducto,
    link: "https://shop.youngultra.biz/collections/frontpage/products/souvenir-hat",
  },
];

export default function Home() {
  return (
    <Container>
      <Header />
      <Embead url={`https://www.youtube.com/embed/${process.env.REACT_APP_EMBEAD_ID ?? "NrY7VHaqi04"}`} />
      <Title />
      <Bands items={bandsItems} />
      <GhostDivisor repeat={10} />
      <Merch items={merchItems} />
      <GhostDivisor repeat={10} />
      <MailChimp />
      <Footer />
    </Container>
  );
}
