import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Layout() {
  return (
    <div className="mx-auto relative mt-20 rounded-4xl border-10 border-black/30 h-[84vh]">
      <Header />
      <main className="pt-17 h-208 overflow-scroll px-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
