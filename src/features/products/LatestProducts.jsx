import React, { use } from "react";

const LatestProducts = ({ latestProductsPromise }) => {
  const LatestProducts = use(latestProductsPromise);
  console.log(LatestProducts);
  return <div></div>;
};

export default LatestProducts;
