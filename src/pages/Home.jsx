import React from "react";
import LatestProducts from "../features/products/LatestProducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      Home Main Content
      <LatestProducts latestProductsPromise={latestProductsPromise} />
    </div>
  );
};

export default Home;
