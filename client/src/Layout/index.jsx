import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../containers";

const Layout = () => {
  const location = useLocation();

  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/register";

  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      {showHeader && <Footer />}
    </>
  );
};

export default Layout;
