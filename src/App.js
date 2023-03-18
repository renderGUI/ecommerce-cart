import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ItemDescription from "./pages/ItemDescription";
import { ProductContext } from "./contexts/product-context";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:itemId" element={<ItemDescription />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
