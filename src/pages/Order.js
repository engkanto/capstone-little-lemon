import React from 'react';
import { Helmet } from 'react-helmet-async';

function Order() {
  return (
    <>
      <Helmet>
        <title>Little Lemon - Order Online</title>
        <meta name="description" content="Order food online from Little Lemon restaurant" />
      </Helmet>
      <section className="construction">
        <div className="container">
          <h1>Order Online</h1>
          <p>Under Construction</p>
        </div>
      </section>
    </>
  );
}

export default Order;
