import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services';
import Account from '../pages/account/Account';
import Contact from '../pages/contact/contact';
import SingUp from '../components/singUp/SingUp';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    return fetch(`/allData.json`);
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
                path: '/sign-up',
                element: <SingUp /> ,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
]);

export default Router;
