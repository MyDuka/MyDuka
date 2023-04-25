import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import UserManagementComponent from './components/FunctionalityComponents/UserManagement';
import ClerkDashboard from './components/ClerkDashboard';
function App() {
  return (
    <div className="App">
      <ClerkDashboard/>
    {/* <Routes>
      <Route exact path='/admin/user-management' >
        <UserManagementComponent />
      </Route>
    </Routes> */}
    </div>
  );
}

export default App;

