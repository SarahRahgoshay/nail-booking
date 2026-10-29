import Footer from "./Footer";
import Header from "./Header";
import Styles from './Footer.module.css';
import { Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <>
            <Header />
            <main className="padding-top">
                <Outlet />
            </main>
            <Footer /> 
        </>
    );
};

export default Layout;