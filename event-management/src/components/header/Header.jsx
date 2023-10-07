import { useLocation } from "react-router-dom";
import NavMenus from "../navMneus/NavMenus";
import HeroSlider from "../slider/HeroSlider";
import TopHeader from "../topHeader/TopHeader";


const Header = () => {
     const whicesPage = useLocation();
     console.log(whicesPage);
    
     if (whicesPage.pathname === '/') {
         console.log('home');
     }
         return (
             <>
                 <TopHeader />
                 {/* <NavMenus /> */}
                 <HeroSlider>
                     <NavMenus />
                 </HeroSlider>
             </>
         );
};

export default Header;