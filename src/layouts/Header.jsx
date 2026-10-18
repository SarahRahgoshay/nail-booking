import { useEffect, useState } from "react";
import Styles from './Header.module.css';
import { FiMenu, FiX } from "react-icons/fi";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-rosegold.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 761px)");

    const menuList = [
        {to: "/" , label: "صفحه اصلی" , end: true},
        {to: "/services" , label: "خدمات"},
        {to: "/portfolios" , label: "نمونه کارها"},
        {to: "/contact-us" , label: "تماس با ما"},
    ];

    const navClass = ({ isActive }) => isActive ? Styles.activeLink : "";

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [isOpen])

    useEffect(() => {
        if (isDesktop) {
            setIsOpen(false)
        }
    }, [isDesktop])
    return (
        <>
            <header className={Styles.header}>
                <nav className={Styles.navbar}>

                    <button
                        className={Styles.hamburger}
                        onClick={() => setIsOpen(prev => !prev)}
                        aria-label={isOpen ? "بستن منو" : "باز کردن منو"}

                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {isOpen &&
                        <div className={Styles.backdrop} onClick={() => setIsOpen(false)}></div>
                    }
                    <ul className={`${Styles.menuList} ${isOpen ? Styles.menuOpen : ""}`}>
                        {menuList.map((menuItem) => 
                            <li key={menuItem.to}>
                                <NavLink 
                                    className={navClass} 
                                    to={menuItem.to} 
                                    end={menuItem.end}
                                    onClick={() => setIsOpen(false)}>
                                    {menuItem.label} 
                                </NavLink>
                            </li>
                        )}
                    </ul>
                    <div className={Styles.logo}>
                        <Link to="/">
                            <img src={logo} alt="header-logo" />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;