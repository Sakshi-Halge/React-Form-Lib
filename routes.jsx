import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./src/pages/Dashboard";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "*",
        element: <div>404 Not Found</div>
    }
]);

export default routes;