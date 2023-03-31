import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import TopHeader from "../Sections/TopHeader";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <TopHeader />
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
