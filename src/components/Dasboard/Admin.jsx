import React, { useState } from 'react';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

function Admin({ navOpen, setNavOpen }) {
    const notificationData = [
        {
            title: "Notification title",
            message: "Improve and maintain heathy sleep routine",
            time: "5 min "
        },
        {
            title: "Notification title",
            message: "Improve and maintain heathy sleep routine",
            time: "5 min "
        },
        {
            title: "Notification title",
            message: "Improve and maintain heathy sleep routine",
            time: "5 min "
        },
        {
            title: "Notification title",
            message: "Improve and maintain heathy sleep routine",
            time: "5 min "
        },
    ]
    return (
        <div className="h-[100vh] flex bg-[#f2f2f2]">
            <SideNav navOpen={navOpen} setNavOpen={setNavOpen} />
            <Outlet context={notificationData} />
        </div>
    );
}

export default Admin;