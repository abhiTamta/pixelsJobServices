import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
MainLayout

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: "page not found",
    children: [
      { index: true, element: <Home /> }, // default page
    //   { path: "about", element: <About /> },
    //   { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router
