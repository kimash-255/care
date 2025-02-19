import Link from "next/link";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-16 mb-16 p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
