import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './Globalcomponents/ThemeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";
//Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ProductPages from "./Pages/productPages";

function App() {
  const [theme] = useThemeHook();
  return (
    <div className="App">
      <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
        <Header />
        <Router>
          <Home path="/" />
          <Cart path="/cart" />
          <ProductPages path="/productpages" />
        </Router>
      </main>
    </div>
  );
}

export default App;
