import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage/home';
import TopBox from './Components/TopBox/topbox';
import Header from './Components/HomePage/Header/header';
import Footer from './Components/Footer/footer';
import Shop from './Components/ShopPage/shop'
import Contact from './Components/Contact/contact';
import Onas from './Components/Onas/onas';
import Oplata from './Components/Oplata/oplata';
import Product from './Components/Product/product';

function App() {
  return (
    <>
      <div className="container">
        <TopBox />
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Shop" element={<Shop />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Onas" element={<Onas />}/>
            <Route path="/Oplata" element={<Oplata />}/>
            <Route path="/Product" element={<Product />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;