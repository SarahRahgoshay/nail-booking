import Styles from './Footer.module.css';
import { FiPhoneCall } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-rosegold.png";
import nailLogo from "../assets/images/nail-polish.svg";
import insta from "../assets/images/insta.svg";
import whatsapp from "../assets/images/whatsapp.svg";



const Footer = () => {
    return (
        <>
            <footer className={Styles.footer}>
                <div className={Styles.footerLogo}>
                    <img src={logo} alt="footer-logo" />
                </div>
                <div className={Styles.footerContent}>
                    <div className={Styles.logo}>
                        <img src={nailLogo} alt="nail-logo" />
                        <h3> درخشش دستان شما، امضای هنر ماست</h3>
                    </div>
                    <div className={Styles.contactInfo}>
                        <h2>ارتباط با ما</h2>
                        <ul>
                            <li>
                                <a className={Styles.phone} href="tel:0912345678">
                                    <FiPhoneCall />
                                    <span> 0912345678 </span>
                                </a>
                            </li>
                            <li>📍آستانه اشرفیه </li>
                        </ul>
                    </div>
                    <div className={Styles.links}>
                        <h2>دسترسی سریع</h2>
                        <ul>
                            <li> <Link to="/portfolios"> نمونه کار ها </Link> </li>
                            <li> <Link to="/services"> خدمات </Link> </li>
                            <li>
                                <Link className={Styles.reservation} to='/booking'>
                                    رزرو نوبت
                                    <CiCalendar size={25} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={Styles.social}>
                        <h2>شبکه های اجتماعی </h2>
                        <ul>
                            <li>
                                <a href="https://instagram.com/..." target="_blank" rel="noopener noreferrer">
                                    <img src={insta} alt="insta" />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer">
                                    <img src={whatsapp} alt="whatsapp" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.copyRight}>
                    <p>© 2026 Nail Salon · تمام حقوق محفوظ است</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;