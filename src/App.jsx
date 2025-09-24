import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "../src/pages/Home";
import Pastes from "../src/pages/Pastes";
import ViewPaste from "../src/pages/ViewPaste";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route element={<Home />} path="/" />
          {/* pastes */}
          <Route element={<Pastes />} path="/pastes" />
          {/* Paste */}
          <Route element={<ViewPaste />} path="/pastes/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
