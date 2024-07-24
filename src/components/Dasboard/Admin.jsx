import React from 'react';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

function Admin(props) {
    return (
        <div className="h-[100vh] flex bg-[#f2f2f2]">
            <SideNav />
            <Outlet />
        </div>
    );
}

export default Admin;