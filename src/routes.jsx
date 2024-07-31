import { createBrowserRouter } from "react-router-dom";
import {Home} from "./pages/home";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { ForgotPassword } from "./pages/forgot.password";


export const route = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path:"/forgot-password",
    element: <ForgotPassword />
  }
  
]);