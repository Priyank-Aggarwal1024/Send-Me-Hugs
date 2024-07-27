import React, { useState } from 'react';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

function Admin(props) {
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
        <div className="min-h-[100vh] h-fit flex bg-[#f2f2f2]">
            <SideNav />
            <Outlet context={notificationData} />
        </div>
    );
}

export default Admin;