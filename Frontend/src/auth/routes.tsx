
import { Route, Routes, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
// import AdminDashboard from "@/modules/admin/pages/Dashboard"; // Example

const AdminRoutes = () => {
  const token = localStorage.getItem("adminToken");

  return (
    <Routes>
      <Route
        path="/admin/login"
        element={token ? <Navigate to="/admin/dashboard" /> : <AdminLogin />}
      />
      {/* <Route
        path="/admin/dashboard/*"
        element={token ? <AdminDashboard /> : <Navigate to="/admin/login" />}
      /> */}
    </Routes>
  );
};

export default AdminRoutes;
