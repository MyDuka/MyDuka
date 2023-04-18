import React, { useState } from "react";

const SupplyRequest = () => {
  const [requests, setRequests] = useState([]);

  const handleApproveRequest = (id) => {
    // update the status of supply request with given id to 'approved'
  };

  const handleDeclineRequest = (id) => {
    // update the status of supply request with given id to 'declined'
  };

  return (
    <div>
      <h2>Supply Request</h2>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.productName}</td>
              <td>{request.quantity}</td>
              <td>{request.status}</td>
              <td>
                <button onClick={() => handleApproveRequest(request.id)}>
                  Approve
                </button>
                <button onClick={() => handleDeclineRequest(request.id)}>
                  Decline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyRequest;