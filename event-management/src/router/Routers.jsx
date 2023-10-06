import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";


const Routers = createBrowserRouter([{
    path:"/",
    element:<Root></Root>,
}])

export default Routers;