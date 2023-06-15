import {Navigate, RouteObject} from "react-router-dom";
import MainPage from "../components/MainPage";
import UploadPage from "../components/UploadPage";

// const MainPage = import(MainPage)
const routes=[
    {
        path: "/index",
        element: <MainPage />
    },
    {
        path: "/upload",
        element: <UploadPage/>
    },
    {
        path: "/",
        element: <Navigate to="/index" />
    }
]
export default routes;