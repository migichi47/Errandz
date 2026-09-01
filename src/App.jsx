import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
