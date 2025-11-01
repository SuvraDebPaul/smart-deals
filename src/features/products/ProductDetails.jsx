import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../../utilities/Loader";
import Container from "../../utilities/Container";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // state to store product
  const [loading, setLoading] = useState(true); // optional loading state

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader></Loader>;
  if (!product) return <p>Product not found</p>;
  return (
    <section className="bg-stone-50">
      <Container>
        <div className="mb-20 flex gap-10">
          <div className="basis-1/3 rounded-xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full bg-amber-100 p-4"
            />
            <div className="mt-10 rounded-xl bg-white p-4">
              <h3 className="my-3 text-2xl font-semibold">
                Product Description
              </h3>
              <div className="flex items-center justify-between border-b border-stone-700 pb-2">
                <p className="capitalize">
                  <span className="text-gradient">Condition: </span>
                  {product.condition}
                </p>
                <p className="capitalize">
                  <span className="text-gradient">Usage Time: </span>
                  {product.usage}
                </p>
              </div>
              <p className="mt-5">{product.description}</p>
            </div>
          </div>
          <div className="flex-1 text-left">
            <Link>
              &larr; <span>Back To Products</span>
            </Link>
            <h2 className="text-5xl font-bold">{product.title}</h2>
            <p>{product.category}</p>
            <div className="rounded-xl bg-white p-4">
              <p className="text-2xl font-bold text-green-600">
                BDT {product.price_min} - {product.price_max}
              </p>
              <p>Price Start From</p>
            </div>
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="text-2xl font-bold">Product Details</p>
              <p>Product Id: {product._id}</p>
              <p>Posted: {new Date(product.created_at).toLocaleDateString()}</p>
            </div>
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="text-2xl font-bold">Seller Information</p>
              <div className="my-4 flex items-center gap-x-4 text-stone-700">
                <img
                  src={product.seller_image}
                  alt=""
                  className="w-14 rounded-full"
                />
                <div>
                  <p>{product.seller_name}</p>
                  <p className="text-sm">{product.email}</p>
                </div>
              </div>
              <p>Location: {product.location}</p>
              <p>Contact No: {product.seller_contact}</p>
              <p>
                Status:{" "}
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs capitalize">
                  {product.status}
                </span>
              </p>
            </div>
            <Link type="button" className="btn btn-gradient mt-10 w-full">
              I Want To Buy This Product
            </Link>
          </div>
        </div>
        <div className="pb-5">
          <h2 className="text-4xl font-bold">
            Bids For This Products: <span className="text-gradient">03</span>
          </h2>
          <div>
            
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
