import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <>
            <header className="font-barlow">
                <Header />
            </header>
            <main className="font-barlow myContainer">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Root;
