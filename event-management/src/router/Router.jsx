import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services';
import Account from '../pages/account/Account';
import Contact from '../pages/contact/contact';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    return fetch(`/public/allData.json`);
                },
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/account',
                element: <Account />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

export default Router;
