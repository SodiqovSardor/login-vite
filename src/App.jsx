import { Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import About from "./componentes/About";
import Contact from "./componentes/Contact";
import Login from "./componentes/Login";
import Dashboard from "./componentes/Dashboard";
import ProtectedRoute from "./componentes/ProtectedRoute";
import AdminLayout from "./componentes/AdminPanel/AdminLayout";
import Users from "./componentes/AdminPanel/Users";
import Carts from "./componentes/AdminPanel/Carts";
import Producs from "./componentes/AdminPanel/Producs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="carts" element={<Carts />} />
        <Route path="products" element={<Producs />} />
      </Route>
    </Routes>
  );
};

export default App;
