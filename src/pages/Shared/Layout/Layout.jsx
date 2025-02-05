import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import './Layout.scss';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="layout__content">
                <Outlet />
            </main>
        </div>
    );
}
