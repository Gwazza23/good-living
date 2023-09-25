import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Nav/Nav";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
