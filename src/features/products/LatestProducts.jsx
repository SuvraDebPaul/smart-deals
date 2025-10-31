import React, { use } from "react";
import SingleProduct from "./SingleProduct";

const LatestProducts = ({ latestProductsPromise }) => {
  const allLatestProducts = use(latestProductsPromise);
  console.log(allLatestProducts);

  return (
    <div className="grid grid-cols-3 gap-4">
      {allLatestProducts.map((product) => (
        <SingleProduct key={product._id} product={product}></SingleProduct>
      ))}
    </div>
  );
};

export default LatestProducts;
