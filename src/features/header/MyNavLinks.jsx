import React from "react";
import { NavLink } from "react-router";

const MyNavLinks = ({ children, to, className }) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `text-gradient ${className} font-semibold`
            : `font-semibold`
        }
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default MyNavLinks;
