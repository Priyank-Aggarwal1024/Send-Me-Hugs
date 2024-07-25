import React, { useState } from 'react';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

function Admin({ navOpen, setNavOpen }) {
    return (
        <div className="h-[100vh] flex bg-[#f2f2f2]">
            <SideNav navOpen={navOpen} setNavOpen={setNavOpen} />
            <Outlet />
        </div>
    );
}

export default Admin;