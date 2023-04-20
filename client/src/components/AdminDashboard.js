// import { useHistory } from 'react-router-dom';
import { redirect, useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import UserManagement from './FunctionalityComponents/UserManagement';
import ProductManagement from './FunctionalityComponents/ProductManagement';
import SalesReport from './FunctionalityComponents/SalesReport';
import SupplyRequest from './FunctionalityComponents/SupplyRequest';
import PaymentManagement from './FunctionalityComponents/PaymentManagement';
import Analytics from './FunctionalityComponents/Analytics';

const AdminDashboard = () => {
  const [reroute, setReroute] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setReroute(true);
  }

  if (reroute) {
    return redirect ("/")
  }

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <Routes>
      <Route exact path='/admin/user-management' element={<UserManagement />} />
<Route path='/admin/product-management' element={<ProductManagement />} />
<Route path='/admin/sales-report' element={<SalesReport />} />
<Route path='/admin/supply-request' element={<SupplyRequest />} />
<Route path='/admin/payment-management' element={<PaymentManagement />} />
<Route path='/admin/analytics' element={<Analytics />} />
      </Routes>
      
    </div>
  );
}

export default AdminDashboard;