import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout() {
  return (
    <div className="relative h-screen">
      <Header />
      <main className="py-17 h-screen overflow-scroll px-3 max-w-300 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
