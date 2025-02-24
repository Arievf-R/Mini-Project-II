import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { DetailUser } from "./pages/DetailUser";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="detail/:id" element={<DetailUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
