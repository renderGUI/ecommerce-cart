import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { QueryClientProvider, QueryClient } from "react-query";

const App = () => {
  const client = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
