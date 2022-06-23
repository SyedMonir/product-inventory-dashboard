import React from 'react';

const SelectedProduct = ({ setShowModal }) => {
  return (
    <>
      <section>
        <p className="text-sm">List of items that you have selected</p>

        <table class="table-auto w-full">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>The Sliding Mr. Bones</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>

        <button onClick={() => setShowModal(true)}>Confirm</button>
      </section>
    </>
  );
};

export default SelectedProduct;
