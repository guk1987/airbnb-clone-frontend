import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Users from "./routes/Users";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
        {
            path:"",
            element: <Home />

        },
        {
            path:"/Users",
            element: <Users />
        }
    ]
    },
]);

export default router; 