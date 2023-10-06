import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import Reservation from "./components/Reservation";
import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="menu" element={<Menu />} />
            <Route path="orderOnline" element={<OrderOnline />} />
            <Route path="Reservation" element={<Reservation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
