import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content font-bold">
      <h2 className='text-3xl text-secondary'>Welcome to Your DashBoard</h2>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">

      <li className='text-xl text-accent'><Link to="/dashboard">My Appointments</Link></li>
      <li className='text-xl text-accent'><Link to="/dashboard/review">Review</Link></li>
      <li className='text-xl text-accent'><Link to="/dashboard/history">My History</Link></li>
     
      {admin && <>
        <li className='text-xl text-accent'><Link to="/dashboard/users">All Users</Link></li>
        <li className='text-xl text-accent'><Link to="/dashboard/doctor">Add New Doctor</Link></li>
        <li className='text-xl text-accent'><Link to="/dashboard/managedoctor">Manage All Doctors</Link></li>
      </>}
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;