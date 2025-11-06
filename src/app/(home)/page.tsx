"use client";
import Hero from "@/app/(home)/components/Hero";
import TopNotch from "./components/TopNotch";
import Talent from "./components/Talent";
import WhatMake from "./components/WhatMake";
import LatestArticle from "./components/LatestArticle";
import BehindScreen from "./components/BehindScreen";
import Team from "./components/Team";
import DigitalProduct from "./components/DigitalProduct";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopNotch />
      <Talent />
      <DigitalProduct />
      <WhatMake />
      {/* <LatestArticle /> */}
      <Team />
      <BehindScreen />
    </main>
  );
}
