


import { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";



interface ScrollPosition {
    scroll: number;
}
 


function Header({scroll}: ScrollPosition) {
     
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
                                <img src='/src/assets/logo.png' />
                            </div>
                            <div className="nav-user-info">
                                <button type='button' className="notifications">
                                    <IoMdNotifications />
                                    
                                </button>
                                <button type='button' className="toggle">
                                    <span className="toggle-menu"></span>
                                    <span className="toggle-menu"></span>
                                    <span className="toggle-menu"></span>
                                </button>
                                <button type='button' className="user-profile" >
                                    <img src='/src/assets/profile.png' />
                                </button>
                                



                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Header