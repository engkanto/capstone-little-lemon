import React from 'react';
import { Helmet } from 'react-helmet-async';

function OrderPage() {
  return (
    <>
      <Helmet>
        <title>Little Lemon - Order Online</title>
        <meta name="description" content="Order food online from Little Lemon restaurant" />
      </Helmet>
      <div className="container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Order Online</h1>
        <p>Under Construction</p>
      </div>
    </>
  );
}

export default OrderPage;
