import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import MyNavLinks from "./MyNavLinks";
import { AuthContext } from "../../contexts/AuthContext";

const headerNavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Products",
    path: "/allproducts",
  },
  {
    name: "My Products",
    path: "/myproducts",
  },
  {
    name: "My Bids",
    path: "/mybids",
  },
  {
    name: "Create Product",
    path: "/createproduct",
  },
];

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-medium shadow"
            >
              {headerNavLinks.map((link, i) => (
                <MyNavLinks key={i} to={link.path}>
                  {link.name}
                </MyNavLinks>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">
            Samrt<span className="text-gradient">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            {headerNavLinks.map((link, i) => (
              <MyNavLinks key={i} to={link.path}>
                {link.name}
              </MyNavLinks>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {!user ? (
            <>
              <Link
                to="login"
                className="btn btn-outline btn-primary text-gradient px-5"
              >
                Login
              </Link>
              <Link to="register" className="btn btn-gradient px-4">
                Register
              </Link>
            </>
          ) : (
            <>
              <p>{`${user.displayName ? user.displayName : ""}`}</p>
              <button onClick={handleSignOut} className="btn btn-gradient">
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
