import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../pages/Home";

export const initRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      }
    ]
  }
])