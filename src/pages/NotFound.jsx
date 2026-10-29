import Styles from "./NotFound.module.css";
import notFound from "../assets/images/404-page.png"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main className={Styles.notFound}>
            <div className={Styles.content}>
                <img
                    src={notFound}
                    alt="صفحه 404"
                    className={Styles.image}
                />

                <div className={Styles.textContent}>
                    <p className={Styles.code} aria-hidden="true">404</p>
                    <h1 className={Styles.title}>صفحه مورد نظر پیدا نشد!</h1>
                    <p className={Styles.description}>
                        متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است آدرس آن تغییر کرده باشد.
                    </p>
                    <Link className={Styles.homeLink} to="/">بازگشت به صفحه اصلی</Link>
                </div>
            </div>
        </main>
    );
}
export default NotFound;