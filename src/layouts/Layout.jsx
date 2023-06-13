import Navbar from "./Menu/Navbar/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  );
};

export default Layout;
