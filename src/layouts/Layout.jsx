import Footer from "./Footer";
import Header from "./Header";
import Styles from './Footer.module.css';


const Layout = ({children}) => {

    return (
        <>
            <Header />
            <main className="padding-top">
             {children}
            </main>
            <Footer /> 
        </>
    );
};

export default Layout;