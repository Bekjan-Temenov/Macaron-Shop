import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Mui from "../Components/Home/Mui/Mui"
function Layout() {
  return (
    <div>
      <Header />
      <Mui/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
