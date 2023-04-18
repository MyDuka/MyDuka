// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import UserManagement from './FunctionalityComponents/UserManagement';
import ProductManagement from './FunctionalityComponents/ProductManagement';
import SalesReport from './FunctionalityComponents/SalesReport';
import SupplyRequest from './FunctionalityComponents/SupplyRequest';
import PaymentManagement from './FunctionalityComponents/PaymentManagement';
import Analytics from './FunctionalityComponents/Analytics';

const AdminDashboard = () => {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <Switch>
        <Route exact path='/admin/user-management' component={<UserManagement/>} />
        <Route exact path='/admin/product-management' component={<ProductManagement/>} />
        <Route exact path='/admin/sales-report' component={<SalesReport/>} />
        <Route exact path='/admin/supply-request' component={<SupplyRequest/>} />
        <Route exact path='/admin/payment-management' component={<PaymentManagement/>} />
        <Route exact path='/admin/analytics' component={<Analytics/>} />
      </Switch>
      
    </div>
  );
}

export default AdminDashboard;