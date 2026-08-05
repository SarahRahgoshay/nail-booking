import Footer from "./Footer";
import Header from "./Header";
import Styles from './Footer.module.css';


const Layout = ({children}) => {

    return (
        <>
            <Header />
             {children}
             <div className={Styles.footerSpace}></div>
            <Footer /> 
        </>
    );
};

export default Layout;