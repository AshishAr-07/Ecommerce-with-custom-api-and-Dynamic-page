import React from "react";
import { Banner } from "./_components/Banner";
import Cta from "./_components/Cta";
import Product from "./_components/Product";

const items = [
  {
    image: "/slider1.png",
    heading: "Style Redefined: Shop the Trends That Define You!",
    shortdesc:
      "Discover the latest in fashion with pieces that match your unique style. Our collection has everything you need to express yourself with confidence.",
  },
  {
    image: "/s1.jpg",
    heading: "Style Redefined: Shop the Trends That Define You!",
    shortdesc:
      "Discover the latest in fashion with pieces that match your unique style. Our collection has everything you need to express yourself with confidence.",
  },
];

export default function page() {
  return (
    <>
      <Banner items={items} />
      <Cta />
      <Product activepage="homepage" />
    </>
  );
}