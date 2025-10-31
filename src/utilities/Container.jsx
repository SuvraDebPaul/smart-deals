import React from "react";

const Container = ({ children, className }) => {
  return (
    <section className={`mx-auto w-11/12 ${className}`}>{children}</section>
  );
};

export default Container;
