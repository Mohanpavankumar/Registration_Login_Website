import { createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import App from './../App';
import Home from './../pages/Home';
import ForgotPassword from './../pages/ForgotPassword';
import SignUp from './../pages/SignUp';
import Conatct from './../pages/Conatct';

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "forgot-Password",
                element : <ForgotPassword/>
            },
            {
                path : "contact",
                element : <Conatct/>
            }
        ]
    }
]);

export default router;