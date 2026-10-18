import Styles from './PortfolioCard.module.css';

const PortfolioCard = ({ item }) => {
    return (
        <article className={Styles.portfolioCard}>
            <div className={Styles.imageWrapper}>
                <img
                    className={Styles.portfolioImage}
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                />
                <div className={Styles.imageOverlay}>
                    <h3 className={Styles.portfolioTitle}>
                        {item.title}
                    </h3>
                </div>
            </div>

        </article>
    );
};

export default PortfolioCard;