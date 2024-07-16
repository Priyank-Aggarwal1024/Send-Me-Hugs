import React, { useState } from 'react';
import { loginBtn, logo } from '../../assets';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className="max-w-[1512px] bg-dark-cyan p-[10px_16px] sm:p-[10px_32px] xl:p-[15px_96px] mx-auto 2xl:p-[15px_156px] flex justify-between items-center">

            <div className="logo flex justify-center items-center gap-[22px]">
                <div className="xlg:hidden" onClick={() => setNavOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.7083 9.16667H3.29167C2.85444 9.16667 2.5 9.52111 2.5 9.95833V10.0417C2.5 10.4789 2.85444 10.8333 3.29167 10.8333H16.7083C17.1456 10.8333 17.5 10.4789 17.5 10.0417V9.95833C17.5 9.52111 17.1456 9.16667 16.7083 9.16667Z" fill="white" />
                        <path d="M16.7083 13.3333H3.29167C2.85444 13.3333 2.5 13.6878 2.5 14.125V14.2083C2.5 14.6456 2.85444 15 3.29167 15H16.7083C17.1456 15 17.5 14.6456 17.5 14.2083V14.125C17.5 13.6878 17.1456 13.3333 16.7083 13.3333Z" fill="white" />
                        <path d="M16.7083 5H3.29167C2.85444 5 2.5 5.35444 2.5 5.79167V5.875C2.5 6.31223 2.85444 6.66667 3.29167 6.66667H16.7083C17.1456 6.66667 17.5 6.31223 17.5 5.875V5.79167C17.5 5.35444 17.1456 5 16.7083 5Z" fill="white" />
                    </svg>
                </div>
                <img src={logo} alt="Logo SendMeHugs" />
            </div>
            <div className="hidden xlg:flex links items-center gap-[25px] lg:gap-[15px] text-white font-popins">
                <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200">Home</Link>
                <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200"><span>For Charities</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M7.23807 11.1998C7.07061 11.1988 6.90524 11.1625 6.7528 11.0931C6.58793 11.0205 6.44746 10.9019 6.34817 10.7515C6.24888 10.6012 6.19497 10.4254 6.19287 10.2452L6.19287 5.755C6.19497 5.57483 6.24888 5.39907 6.34817 5.24871C6.44746 5.09836 6.58793 4.97976 6.7528 4.90708C6.9425 4.81747 7.15356 4.78296 7.36193 4.80748C7.57029 4.83199 7.76758 4.91455 7.93131 5.04574L10.651 7.29085C10.7576 7.37576 10.8437 7.48362 10.9029 7.60642C10.9621 7.72922 10.9929 7.86379 10.9929 8.00011C10.9929 8.13644 10.9621 8.27101 10.9029 8.39381C10.8437 8.5166 10.7576 8.62447 10.651 8.70938L7.93131 10.9545C7.73527 11.1135 7.49047 11.2001 7.23807 11.1998Z" fill="white" />
                    </svg></Link>
                <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200"><span>For Individuals</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M7.23807 11.1998C7.07061 11.1988 6.90524 11.1625 6.7528 11.0931C6.58793 11.0205 6.44746 10.9019 6.34817 10.7515C6.24888 10.6012 6.19497 10.4254 6.19287 10.2452L6.19287 5.755C6.19497 5.57483 6.24888 5.39907 6.34817 5.24871C6.44746 5.09836 6.58793 4.97976 6.7528 4.90708C6.9425 4.81747 7.15356 4.78296 7.36193 4.80748C7.57029 4.83199 7.76758 4.91455 7.93131 5.04574L10.651 7.29085C10.7576 7.37576 10.8437 7.48362 10.9029 7.60642C10.9621 7.72922 10.9929 7.86379 10.9929 8.00011C10.9929 8.13644 10.9621 8.27101 10.9029 8.39381C10.8437 8.5166 10.7576 8.62447 10.651 8.70938L7.93131 10.9545C7.73527 11.1135 7.49047 11.2001 7.23807 11.1998Z" fill="white" />
                    </svg></Link>
                <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200">FAQ</Link>
                <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200">About Us</Link>
            </div>
            <div className={`mobile-nav pt-[15px] gap-[72px] min-h-[100vh] absolute z-[100] ${navOpen ? "left-[0px] duration-200" : "-left-[375px] "} top-0 min-w-[375px] xss:w-[100%] xss:min-w-[unset] bg-black flex items-center text-white flex-col xlg:hidden`}>
                <svg className="ml-auto mr-[19px]" onClick={() => setNavOpen(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 7L7 17M17 17L7 7" stroke="#626B7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="logo">
                    <img src={logo} alt="Logo SendMeHugs" />
                </div>
                <div className="links flex flex-col gap-[24px] font-popins">
                    <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200">Home</Link>
                    <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200"><span>For Charities</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M7.23807 11.1998C7.07061 11.1988 6.90524 11.1625 6.7528 11.0931C6.58793 11.0205 6.44746 10.9019 6.34817 10.7515C6.24888 10.6012 6.19497 10.4254 6.19287 10.2452L6.19287 5.755C6.19497 5.57483 6.24888 5.39907 6.34817 5.24871C6.44746 5.09836 6.58793 4.97976 6.7528 4.90708C6.9425 4.81747 7.15356 4.78296 7.36193 4.80748C7.57029 4.83199 7.76758 4.91455 7.93131 5.04574L10.651 7.29085C10.7576 7.37576 10.8437 7.48362 10.9029 7.60642C10.9621 7.72922 10.9929 7.86379 10.9929 8.00011C10.9929 8.13644 10.9621 8.27101 10.9029 8.39381C10.8437 8.5166 10.7576 8.62447 10.651 8.70938L7.93131 10.9545C7.73527 11.1135 7.49047 11.2001 7.23807 11.1998Z" fill="white" />
                        </svg></Link>
                    <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200"><span>For Individuals</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M7.23807 11.1998C7.07061 11.1988 6.90524 11.1625 6.7528 11.0931C6.58793 11.0205 6.44746 10.9019 6.34817 10.7515C6.24888 10.6012 6.19497 10.4254 6.19287 10.2452L6.19287 5.755C6.19497 5.57483 6.24888 5.39907 6.34817 5.24871C6.44746 5.09836 6.58793 4.97976 6.7528 4.90708C6.9425 4.81747 7.15356 4.78296 7.36193 4.80748C7.57029 4.83199 7.76758 4.91455 7.93131 5.04574L10.651 7.29085C10.7576 7.37576 10.8437 7.48362 10.9029 7.60642C10.9621 7.72922 10.9929 7.86379 10.9929 8.00011C10.9929 8.13644 10.9621 8.27101 10.9029 8.39381C10.8437 8.5166 10.7576 8.62447 10.651 8.70938L7.93131 10.9545C7.73527 11.1135 7.49047 11.2001 7.23807 11.1998Z" fill="white" />
                        </svg></Link>
                    <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200">FAQ</Link>
                    <Link to="/" className="p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] hover:text-primary-500 duration-200">About Us</Link>
                </div>
            </div>
            <div className="nav-bittons flex justify-center items-center gap-[20px]">
                <button className=" bg-gradient-cyan text-white p-[6px_8px] flex justify-center items-center gap-[4px] text-[14px] rounded-[36px]"><span>Start</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.9998 10.4001C7.86368 10.3994 7.72941 10.3684 7.60674 10.3094C7.48407 10.2503 7.37608 10.1647 7.29061 10.0588L5.04571 7.33876C4.91454 7.17501 4.83199 6.9777 4.80748 6.76931C4.78296 6.56092 4.81747 6.34983 4.90707 6.1601C4.97974 5.99521 5.09833 5.85472 5.24867 5.75542C5.39901 5.65611 5.57475 5.6022 5.75491 5.6001H10.2447C10.4249 5.6022 10.6006 5.65611 10.7509 5.75542C10.9013 5.85472 11.0199 5.99521 11.0925 6.1601C11.1821 6.34983 11.2166 6.56092 11.1921 6.76931C11.1676 6.9777 11.0851 7.17501 10.9539 7.33876L8.709 10.0588C8.62352 10.1647 8.51554 10.2503 8.39287 10.3094C8.2702 10.3684 8.13593 10.3994 7.9998 10.4001Z" fill="white" />
                    </svg></button>
                <img src={loginBtn} alt="Login Button" />
            </div>
        </nav>
    );
}

export default Navbar;