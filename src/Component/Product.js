import React from 'react';

const Product = ({ product }) => {
  const { description, name } = product;
  return (
    <>
      <figure className="w-auto flex  bg-slate-100 p-4 sm:mr-4">
        <div className="sm:w-1/4 w-auto sm:mr-0 mr-4">
          <div className="bg-red-600 text-white w-full h-full flex justify-center items-center">
            150 X 150
          </div>
        </div>
        <div className="sm:w-3/4 w-auto">
          <h2>{name}</h2>
          <div className="flex sm:flex-row flex-col justify-between">
            <p className="text-xs">{description}</p>

            <div className="text-sm">
              <button className="bg-slate-200 rounded p-1 px-3 m-2">
                Add to List
              </button>
              <button className="bg-slate-200 rounded p-1 px-3 m-2">
                Details
              </button>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Product;
