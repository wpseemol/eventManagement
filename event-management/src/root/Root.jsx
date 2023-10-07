import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

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
