import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import Register from "../Pages/Register/Register";
import EditReview from "../Pages/Review/EditReview";
import SelfReview from "../Pages/SelfReview/SelfReview";
import AddService from "../Pages/Service/AddService";
import Services from "../Pages/Service/Services";
import ServiceDetail from "./../Pages/Service/ServiceDetail.js/ServiceDetail";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://server-self-seven.vercel.app/homeservice"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("https://server-self-seven.vercel.app/services"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetail />,
        loader: ({ params }) =>
          fetch(`https://server-self-seven.vercel.app/service/${params.id}`),
      },
      {
        path: "/review",
        element: (
          <PrivateRoutes>
            <SelfReview />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      ,
      {
        path: "/review/edit/:id",
        element: (
          <PrivateRoutes>
            <EditReview />
          </PrivateRoutes>
        ),
      },

      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
