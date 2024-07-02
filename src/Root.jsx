import Nav from "./nav,footer and error/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./nav,footer and error/Footer";

export default function Root() {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
