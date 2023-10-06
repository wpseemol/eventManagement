import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../pages/home/Home';
import Contact from '../pages/contact/Contact';
import About from '../pages/home/about/About';
import MyAccoutn from '../pages/accoutn/MyAccoutn';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/account',
                element: <MyAccoutn />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]);

export default Routers;
