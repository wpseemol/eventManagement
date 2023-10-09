import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../pages/home/Home';
import Services from '../pages/services/Services';
import Account from '../pages/account/Account';
import Contact from '../pages/contact/contact';
import SingUp from '../components/singUp/SingUp';
import PrivetRoute from '../privetRoute/privetRoute';
import ErrorPage from '../pages/errorPage/ErrorPage';
import SinglePage from '../pages/singlePage/SinglePage';
import PrivacyPolicy from '../pages/privacyPolicy/PrivacyPolicy';
import About from '../pages/about/About';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
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
                loader: async () => {
                    return fetch(`/allData.json`);
                },
                element: (
                    <PrivetRoute>
                        <Services />
                    </PrivetRoute>
                ),
            },
            {
                path: '/services/:servic',
                loader: async () => {
                    return fetch(`/allData.json`);
                },
                element: (
                    <PrivetRoute>
                        <SinglePage />
                    </PrivetRoute>
                ),
            },
            {
                path: '/account',
                element: <Account />,
            },
            {
                path: '/sign-up',
                element: <SingUp />,
            },
            {
                path: '/privacy-policy',
                element: (
                    <PrivetRoute>
                        <PrivacyPolicy />,
                    </PrivetRoute>
                ),
            },
            {
                path: '/contact',
                element: <Contact />,
                loader: async () => {
                    return fetch(`/gallery.json`);
                },
            },
            {
                path: '/about',
                element: <About />,
                loader: async () => {
                    return fetch(`/allData.json`);
                },
            },
        ],
    },
]);

export default Router;
