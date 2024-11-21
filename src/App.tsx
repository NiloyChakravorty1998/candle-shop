import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ProductManagement from "./pages/ProductManagement";
import AddProduct from "./pages/ProductManagement/AddProduct";
import EditProductForm from "./pages/ProductManagement/EditProduct";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProductForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
