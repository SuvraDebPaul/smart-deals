import React from "react";
import Navbar from "../features/header/Navbar";
import { Outlet } from "react-router";
import Container from "../utilities/Container";

const AuthLayout = () => {
  return (
    <>
      <header className="border-b-2 border-blue-400">
        <Container>
          <Navbar></Navbar>
        </Container>
      </header>
      <main className="bg-stone-50">
        <Container className={"h-fit"}>
          <Outlet></Outlet>
        </Container>
      </main>
    </>
  );
};

export default AuthLayout;
