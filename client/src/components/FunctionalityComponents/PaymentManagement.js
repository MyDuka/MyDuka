import React, { useState } from "react";

const PaymentManagement = () => {
  const [suppliers, setSuppliers] = useState([]);

  const handleUpdatePaymentStatus = (id) => {
    // update the payment status of supplier with given id
  };

  return (
    <div>
      <h2>Payment Management</h2>
      <table>
        <thead>
          <tr>
            <th>Supplier ID</th>
            <th>Supplier Name</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.paymentStatus}</td>
              <td>
                <button onClick={() => handleUpdatePaymentStatus(supplier.id)}>
                  Update Payment Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentManagement;