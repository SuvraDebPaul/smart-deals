import { createBrowserRouter } from "react-router";
import PageLayout from "../layouts/PageLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import AllProducts from "../features/products/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProducts from "../features/products/MyProducts";
import MyBids from "../features/bids/MyBids";
import PrivateRoutes from "./PrivateRoutes";
import CreateProduct from "../features/products/CreateProduct";
import ProductDetails from "../features/products/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    loader: () =>
      fetch("http://localhost:3000/products").then((res) => res.json()),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "myproducts",
        element: (
          <PrivateRoutes>
            <MyProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "mybids",
        element: (
          <PrivateRoutes>
            <MyBids />
          </PrivateRoutes>
        ),
      },
      {
        path: "createproduct",
        element: <CreateProduct />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
