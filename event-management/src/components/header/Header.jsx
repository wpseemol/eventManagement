import { useLocation } from 'react-router-dom';
import HeroBanar from '../heroBanar/HeroBanar';
import NavbarTopBarPreview from '../navBar/NavBar';
import TopBar from '../topBar/TopBar';

const Header = () => {
    const whichePage = useLocation();

    return (
        <>
            <TopBar />

            {whichePage.pathname === '/' ? (
                <HeroBanar>
                    <NavbarTopBarPreview />
                </HeroBanar>
            ) : (
                <NavbarTopBarPreview />
            )}
        </>
    );
};

export default Header;
