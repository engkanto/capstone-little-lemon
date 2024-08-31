import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';
import Footer from './components/Footer';
import restaurantImg from './assets/llrestaurant.jpg';

function App() {
  return (
    <Router>
      <Helmet>
        <html lang="en" data-theme="light" />
        <title>Little Lemon</title>
        <meta name="description" content="Little Lemon restaurant website" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2.0.6/css/pico.classless.min.css" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://littlelemon.com/" />
        <meta property="og:title" content="Little Lemon Restaurant" />
        <meta property="og:description" content="A charming neighborhood bistro serving simple food and classic cocktails in a lively but casual environment" />
        <meta property="og:image" content={restaurantImg} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://littlelemon.com/" />
        <meta property="twitter:title" content="Little Lemon Restaurant" />
        <meta property="twitter:description" content="A charming neighborhood bistro serving simple food and classic cocktails in a lively but casual environment" />
        <meta property="twitter:image" content={restaurantImg} />
      </Helmet>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;