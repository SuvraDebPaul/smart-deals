import React from "react";
import LatestProducts from "../features/products/LatestProducts";
import { Suspense } from "react";
import Loader from "../utilities/Loader";
import { AuthContext } from "../contexts/AuthContext";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());

const Home = () => {
  return (
    <>
      <section className="block">
        <Suspense fallback={<Loader />}>
          <LatestProducts latestProductsPromise={latestProductsPromise} />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
