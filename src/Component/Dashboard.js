import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(
          `https://fec-inventory-api.herokuapp.com/product-info`
        );
        setProducts(response?.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, []);

  console.log(products[1]);

  return (
    <>
      <h1>Dashboard Supply Room</h1>
      <section className="flex sm:flex-row flex-col-reverse">
        <div className="sm:w-3/5 w-auto gap-y-4 mx-4 grid sm:grid-cols-2">
          {products?.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
        <div className="sm:w-2/5 w-auto mx-4 bg-slate-100 mb-4">h1</div>
      </section>
    </>
  );
};

export default Dashboard;
