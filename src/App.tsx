import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-[calc(100svh-364px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
