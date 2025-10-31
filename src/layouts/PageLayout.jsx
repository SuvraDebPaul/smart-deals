import { Outlet } from "react-router";
import Navbar from "../features/header/Navbar";
import Footer from "../features/footer/Footer";
import Container from "../utilities/Container";

const PageLayout = () => {
  return (
    <>
      <header>
        <Container className="mb-2">
          <Navbar></Navbar>
        </Container>
      </header>
      <main>
        <Container>
          <Outlet></Outlet>
        </Container>
      </main>
      <footer>
        <Container>
          <Footer></Footer>
        </Container>
      </footer>
    </>
  );
};

export default PageLayout;
