import { Link } from 'react-router-dom';
import { GrGallery } from "react-icons/gr";
import { IoArrowBackSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import Styles from './Portfolio.module.css';
import PortfolioCard from './PortfolioCard';
import { portfolios } from './../../mockData/portfolio';
import { useState } from 'react';

const Portfolio = () => {

    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className={Styles.portfolio}>
            <div className={Styles.portfolioHeader}>
                <span> PORTFOLIOS </span>
                <h2> نمونه کارهای من </h2>
                <p> نگاهی به تعدادی از طراحی ها و خدمات ناخن </p>
            </div>

            <Swiper
                className={`${Styles.portfolioSlider} ${isEnd ? Styles.atEnd : ''}`}
                onSwiper={(swiper) => setIsEnd(swiper.isEnd)}
                onSlideChange={(swiper) => setIsEnd(swiper.isEnd)}
                modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
                effect="coverflow"
                slidesPerView={3}
                centeredSlides
                spaceBetween={0}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    stopOnLastSlide: true,
                }}
                navigation
                pagination={{
                    clickable: true,
                    dynamicBullets: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -8,
                    depth: 140,
                    modifier: 1.5,
                    scale: 0.82,
                    slideShadows: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                }}
            >
                {portfolios.slice(0, 8).map((item) => (
                    <SwiperSlide key={item.id}>
                        <PortfolioCard item={item} />
                    </SwiperSlide>
                ))}

                <SwiperSlide key="view-all">
                    <Link to="/portfolios" className={Styles.viewAllSlide}>
                        <span className={Styles.decorativeCircle} aria-hidden="true" />
                        <span className={Styles.decorativeRing} aria-hidden="true" />

                        <span className={Styles.galleryIcon} aria-hidden="true">
                            <GrGallery />
                        </span>

                        <span className={Styles.viewAllEyebrow}>
                            PORTFOLIO
                        </span>

                        <h3>مشاهده همه نمونه‌کارها</h3>

                        <span className={Styles.viewAllDescription}>
                            گالری کامل طراحی ناخن
                        </span>

                        <span className={Styles.viewAllArrow} aria-hidden="true">
                            <IoArrowBackSharp />
                        </span>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Portfolio;