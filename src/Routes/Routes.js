import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import Register from "../Pages/Register/Register";
import SelfReview from "../Pages/SelfReview/SelfReview";
import ServiceDetail from "../Pages/Service/ServiceDetail.js/ServiceDetail";
import Services from "../Pages/Service/Services";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetail />,
      },
      {
        path: "/review",
        element: <SelfReview />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
