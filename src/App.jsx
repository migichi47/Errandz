import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./components/Home";
import { Details } from "./components/Details";


export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}
