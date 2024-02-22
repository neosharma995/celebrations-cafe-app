


import { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link, Outlet } from "react-router-dom"; 
interface ScrollPosition {
    scroll: number;
}
function NavbarLayout({scroll}: ScrollPosition) {
    const [fixed, setFixed] = useState(false);
    useEffect(() => {
        const fixedNavbarHandler = () => {
            if (window.scrollY > scroll) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };
        window.addEventListener('scroll', fixedNavbarHandler);

        return () => {
            window.removeEventListener('scroll', fixedNavbarHandler);
        };
    }, [scrollY]);
    return (
        <>
            <div className={`navbar-outer ${fixed ? 'fixed' : ''}`}>
                <div className="navbar-inner">
                    <div className="navbar-wrapper">
                        <div className="nav-wrapper-flex">
                            <div className="nav-logo">
                                <Link to='/'><img src='/src/assets/logo.png' /></Link>
                            </div>
                            <div className="nav-user-info">
                                <Link to='notification'   className="notifications" >
                                    <IoMdNotifications />    
                                </Link>
                                <Link  to='menu' className="toggle">
                                    <span className="toggle-menu"></span>
                                    <span className="toggle-menu"></span>
                                    <span className="toggle-menu"></span>
                                </Link>
                                <Link to='profile'   className="user-profile" >
                                    <img src='/src/assets/profile.png' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-outlet">
            <Outlet/>
            </div>
        </>
    )
}

export default NavbarLayout