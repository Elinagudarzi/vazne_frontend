import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './Globalcomponents/ThemeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";
import Headers from "./components/headers";

//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import Homee from "./Pages/Homee";
import { Navbar } from "react-bootstrap";


function App() {
  const [theme] = useThemeHook();



  return (
    <div className="App">
      <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
        <Header/>
        <Router>          
          <Home path="/" />
          <Cart path="/cart" />
          <ProductDetails path="product-details/:productId" />
          <Login path="/login" />
          <Register path="register" />
        </Router>
      </main>
    </div>
  );
}

export default App;
