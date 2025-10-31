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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
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
