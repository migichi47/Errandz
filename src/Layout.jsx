import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

export function Layout() {
  return (
    <div className="mx-auto border relative mt-20 rounded-4xl border-black/30 h-[80vh]">
      <Header />
      <main className="pt-20 px-3">
        <Outlet />
      </main>
    </div>
  );
}

