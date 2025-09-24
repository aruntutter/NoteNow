import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="max-w-2xl flex flex-col min-h-screen mx-auto px-3">
      <Navbar />
      <main className="min-w-full mx-auto flex flex-col items-center flex-grow pt-[50px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
