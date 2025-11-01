import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  const { title, price_min, price_max, image } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={title} className="h-80 w-full object-fill p-6" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-gradient font-semibold">
          BDT <span>{price_min}</span> - <span>{price_max}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-gradient btn-block">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
