import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import kite from "../../media/kite.png";
import consoleImg from "../../media/console.png";
import coin from "../../media/coin.png";
import kiteconnect from "../../media/kiteconnect.png";
import varsity from "../../media/varsity.png";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL={kite}
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform..."
        tryDemo="#"
        learnMore="#"
      />

      <RightSection
        imageURL={consoleImg}
        productName="Console"
        productDesription="The central dashboard for your Zerodha account."
        learnMore="#"
      />

      <LeftSection
        imageURL={coin}
        productName="Coin"
        productDesription="Buy direct mutual funds online..."
        tryDemo="#"
        learnMore="#"
      />

      <RightSection
        imageURL={kiteconnect}
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms."
        learnMore="#"
      />

      <LeftSection
        imageURL={varsity}
        productName="Varsity Mobile"
        productDesription="Learn stock markets on the go."
        tryDemo="#"
        learnMore="#"
      />

      <Universe />
    </>
  );
}

export default ProductsPage;
