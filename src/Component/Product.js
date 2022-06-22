import React from 'react';

const Product = () => {
  return (
    <>
      <figure className="flex">
        <div className="w-1/4">
          <img src="" alt="" />
        </div>
        <div className="w-3/4">
          <h2>Name</h2>
          <div className="flex justify-between">
            <p>Description</p>

            <div>
              <button>Add to List</button>
              <button>Details</button>
            </div>
          </div>
        </div>
      </figure>
    </>
  );
};

export default Product;
