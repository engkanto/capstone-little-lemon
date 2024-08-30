import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../components/Banner';
import Menu from '../components/Menu';
import Testimonial from '../components/Testimonial';
import About from '../components/About';

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Little Lemon - Home</title>
        <meta name="description" content="Welcome to Little Lemon, a charming neighborhood bistro serving simple food and classic cocktails in a lively but casual environment" />
      </Helmet>
      <Banner />
      <section id="menu">
        <Menu />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
}

export default LandingPage;