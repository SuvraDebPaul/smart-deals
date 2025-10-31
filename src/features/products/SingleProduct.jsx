import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { title, price_min, price_max, seller_image } = product;
  return (
    <div className="h-80 bg-blue-400 p-4">
      <img src={seller_image} alt={title} />
      <h2>{title}</h2>
      <p className="text-gradient">
        $ <span>{price_min}</span> - <span>{price_max}</span>
      </p>
      <button className="btn btn-gradient btn-block">View Details</button>
    </div>
  );
};

export default SingleProduct;
