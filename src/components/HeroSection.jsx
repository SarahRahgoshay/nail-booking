import Styles from './HeroSection.module.css';
import heroSectionImage from "../assets/images/nail2.jpeg";
import { Link } from 'react-router-dom';
import { CiCalendar } from "react-icons/ci";

const HeroSection = () => {
    return (
        <div className={Styles.heroSec}>
            <div className={Styles.heroContent}>
                <img src={heroSectionImage} alt="hero image" />

                <div className={Styles.overlay}>
                    <span className={Styles.studioName}>
                        <span>✦</span>
                        LUXURY NAIL STUDIO
                        <span>✦</span>
                    </span>
                    <h1>زیبایی دستان شما، هنر ماست</h1>
                    <p>رزرو آنلاین خدمات ناخن</p>
                    <div className={Styles.heroButton}>
                        <Link to='/reservation' className={Styles.reserveBut}>
                            رزرو نوبت
                            <CiCalendar size={22} />
                        </Link >
                        <Link to='/services' className={Styles.serviceBut}> مشاهده خدمات </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;