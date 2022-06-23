import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Product from './Product';
import SelectedProduct from './SelectedProduct';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  // console.log(products[1]);

  return (
    <>
      <section className="mx-4">
        <h1>Dashboard Supply Room</h1>
        <input className="my-4 border" type="text" />
      </section>
      <section className=" flex sm:flex-row flex-col ">
        <div className="sm:w-3/5 w-auto gap-y-4 mx-4 grid sm:grid-cols-2 h-[80vh] overflow-y-scroll">
          {products?.map((product) => (
            <Product key={product?.id} product={product} />
          ))}
        </div>
        <div className="sm:w-2/5 w-auto mx-4 p-4 bg-slate-100 mb-4 sm:mt-0 mt-6">
          <SelectedProduct setShowModal={setShowModal} />
        </div>
      </section>

      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
};

export default Dashboard;
