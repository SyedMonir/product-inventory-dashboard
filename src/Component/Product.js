import React from 'react';

const Product = ({ product }) => {
  const { description, name } = product;
  return (
    <>
      <figure className="flex bg-slate-100 p-4 sm:mr-4">
        <div className="w-[30%] bg-red-600 text-white text-sm flex justify-center items-center">
          150 X 150
        </div>
        <div className="w-2/5 mx-2 ">
          <h2 className="font-semibold mb-4" title={name}>
            {name.slice(0, 10)}
          </h2>
          <div className="flex sm:flex-row flex-col justify-between">
            <p className="text-xs" title={description}>
              {description.slice(0, 50)}
            </p>
          </div>
        </div>
        <div className="text-xs w-[30%] flex flex-col justify-end ">
          <button className="bg-slate-200 rounded p-1 px-3">Add to List</button>
          <button className="bg-slate-200 rounded p-1 px-3 mt-2">
            Details
          </button>
        </div>
      </figure>
    </>
  );
};

export default Product;
