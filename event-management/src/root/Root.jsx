import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavMenus from '../components/navMneus/NavMenus';

const Root = () => {
    return (
        <>
            <header className="font-barlow text-2xl font-bold">
                <nav>
                    <NavMenus />
                </nav>
                
            </header>
            
            <Outlet />
            <Footer />
        </>
    );
};

export default Root;
