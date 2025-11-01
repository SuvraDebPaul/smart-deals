import React from "react";
import LatestProducts from "../features/products/LatestProducts";
import { Suspense } from "react";
import Loader from "../utilities/Loader";
import { AuthContext } from "../contexts/AuthContext";
import Container from "../utilities/Container";
import leftBgImage from "../assets/bg-hero-left.png";
import rightBgImage from "../assets/bg-hero-right.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products",
).then((res) => res.json());

const Home = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="relative mb-10 h-[80vh] bg-linear-to-br from-[#FFE6FD] to-[#E0F8F5] py-20">
        <img src={leftBgImage} alt="" className="absolute top-0 left-0" />
        <img src={rightBgImage} alt="" className="absolute top-0 right-0" />
        <div className="flex flex-col items-center justify-center text-center text-7xl font-bold">
          <h1 className="leading-none">
            Deal your <span className="text-gradient">Products</span>
          </h1>
          <br />
          <h1 className="-mt-14 leading-none">
            in a <span className="text-gradient">Smart</span> way !
          </h1>
          <p className="mt-6 text-xl text-stone-500">
            SmartDeals helps you sell, resell, and shop from trusted local
            sellers — all in one place!
          </p>

          <form className="mt-10" onSubmit={handleSearch}>
            <fieldset className="fieldset flex w-full items-center justify-center">
              <input
                type="text"
                className="input w-120 rounded-tl-full rounded-bl-full"
                placeholder="search For Products, Categoriees..."
                name="search"
              />
              <button
                type="submit"
                className="btn btn-gradient -ml-1 rounded-tr-full rounded-br-full"
              >
                <FaSearch />
              </button>
            </fieldset>
          </form>
          <div>
            <Link type="button" className="btn btn-gradient mr-2">
              Watch All Products
            </Link>
            <Link type="button" className="btn btn-outline btn-primary">
              Post an Product
            </Link>
          </div>
        </div>
      </section>
      <Container>
        <section>
          <Suspense fallback={<Loader />}>
            <LatestProducts latestProductsPromise={latestProductsPromise} />
          </Suspense>
        </section>
      </Container>
    </>
  );
};

export default Home;
