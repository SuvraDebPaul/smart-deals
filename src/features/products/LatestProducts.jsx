import React, { use } from "react";
import SingleProduct from "./SingleProduct";

const LatestProducts = ({ latestProductsPromise }) => {
  const allLatestProducts = use(latestProductsPromise);
  console.log(allLatestProducts);

  return (
    <>
      <div className="mb-10 text-center">
        <h2 className="text-5xl font-bold">
          Recent <span className="text-gradient">Products</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 items-center justify-items-center gap-4">
        {allLatestProducts.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </>
  );
};

export default LatestProducts;
