import { Outlet, useLoaderData } from "react-router";
import Navbar from "../features/header/Navbar";
import Footer from "../features/footer/Footer";
import Container from "../utilities/Container";

const PageLayout = () => {
  const allProducts = useLoaderData();
  return (
    <>
      <header>
        <Container className="mb-2">
          <Navbar></Navbar>
        </Container>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#001931]">
        <Footer allProducts={allProducts}></Footer>
      </footer>
    </>
  );
};

export default PageLayout;
