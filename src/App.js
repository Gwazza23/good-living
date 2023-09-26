import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Products/Components/Header";
import Products from "./Pages/Products/Products";
import AllItem from "./Pages/Products/Components/AllItem";
import Layout from "./Util/Layout";
import { useEffect } from "react";
import Item from "./Pages/Item/Item";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Header />}>
            <Route path="/categories/:category" element={<Products />} />
            <Route index element={<AllItem />} />
          </Route>
          <Route path="/product/:id" element={<Item />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
