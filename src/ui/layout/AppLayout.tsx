import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
