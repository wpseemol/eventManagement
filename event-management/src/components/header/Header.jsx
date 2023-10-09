import { useLocation } from 'react-router-dom';
import HeroBanar from '../heroBanar/HeroBanar';

import TopBar from '../topBar/TopBar';
import NavbarTopBarPreview from '../navBar/NavbarTopBarPreview';

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
