import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { useEffect, useState } from "react";
import api from "./axios";
import Admin from "./pages/Admin";
import ProductAdd from "./pages/ProductAdd";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products`);
      setProduct(data);
    })();
  }, []);
  const handleRemove = async (id) => {
    if (confirm("ban muon xoa")) {
      await api.delete(`/products/${id}`);
      const newData = products.filter((item) => item.id !== id);
      setProduct(newData);
    }
  };
  const handleAdd = async (data) => {
    const newData = await api.post(`products`, data);
    setProduct(newData);
  };
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="admin"> Admin</Link>
          </li>
          <li>
            <Link to="product-add"> Product-add</Link>
          </li>
          <li>
            <Link to="login"> Login</Link>
          </li>
          <li>
            <Link to="register">register</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route
          path="admin"
          element={<Admin data={products} removeProducts={handleRemove} />}
        />
        <Route path="product-add" element={<ProductAdd onAdd={handleAdd} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
