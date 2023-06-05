import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
