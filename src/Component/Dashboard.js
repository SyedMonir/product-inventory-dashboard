import React from 'react';
import Product from './Product';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard Supply Room</h1>
      <section className="flex">
        <div className="w-3/5">
          <Product />
        </div>
        <div className="w-2/5">h1</div>
      </section>
    </>
  );
};

export default Dashboard;
