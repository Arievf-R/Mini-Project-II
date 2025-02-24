import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { UserPage } from "./pages/UserPage";
import { DetailUser } from "./pages/DetailUser";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPages";
import { ProtectedRoute } from "./routes/ProtectedRoute";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route
            path="/detail/:id"
            element={
              <ProtectedRoute>
                <DetailUser />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regist" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
