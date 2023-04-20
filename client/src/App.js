import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import UserManagementComponent from './components/FunctionalityComponents/UserManagement';


function App() {
  return (
    <div className="App">
      <AdminDashboard/>
    {/* <Routes>
      <Route exact path='/admin/user-management' >
        <UserManagementComponent />
      </Route>
    </Routes> */}
    </div>
  );
}

export default App;
