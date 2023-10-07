
import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import Home from '../pages/Home';
import Services from '../pages/servises/Services';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services',
                element: <div>this service</div>,
            },
        ],
    },
]);

export default Router;
