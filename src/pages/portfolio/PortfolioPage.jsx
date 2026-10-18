import { useState } from 'react';
import Styles from './PortfolioPage.module.css';
import { portfolios } from '../../mockData/portfolio';
import PortfolioCard from '../../components/portfolio/PortfolioCard';

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState("همه");

    const categories = [
        "همه",
        ...new Set(portfolios.map((item) => item.category.trim()))
    ];

    const filteredPortfolios = activeCategory === "همه" ? portfolios :
        portfolios.filter((item) => item.category.trim() === activeCategory)

    return (
        <div className={Styles.PortfolioPage}>
            <header className={Styles.portfolioHeader}>
                <h1> گالری نمونه کارها  </h1>
                <p>
                    مجموعه ای از طراحی ها و خدمات ناخن
                    با عشق و ظرافت
                </p>
            </header>

            <nav className={Styles.categoryFilters} aria-label='دسته بندی نمونه کارها'>
                {categories.map((category) => (
                    <button
                        key={category}
                        type='button'
                        className={activeCategory === category ? Styles.activeCategory : Styles.categoryButton}
                        onClick={() => setActiveCategory(category)}
                        aria-pressed={activeCategory === category}
                    >
                        {category}
                    </button>
                ))}
            </nav>
            <section className={Styles.portfolioGrid} aria-label="نمونه کارها">

                {filteredPortfolios.map((item) => (
                    <PortfolioCard key={item.id} item={item} />
                ))}
            </section>
        </div>
    );
};

export default PortfolioPage;