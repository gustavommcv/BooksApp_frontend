import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import './Layout.scss';
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";

export default function Layout() {
    return (
        <div className="layout">
            <ScrollToTop />
            <Header />
            <main className="layout__content">
                <Outlet />
            </main>
        </div>
    );
}
