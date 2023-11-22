import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      {/* <Footer /> */}
      <Footer/>
    </div>
  );
};

Layout.defaultProps = {
  title: "SiteWorx Cloud - Hosting",
  description: "SiteWorx Cloud",
  keywords: "mern,react,node,mongodb",
  author: "Kamlesh Choudhary",
};

export default Layout;
