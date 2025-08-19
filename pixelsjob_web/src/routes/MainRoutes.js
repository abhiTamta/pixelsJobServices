import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
    //   { path: "about", element: <AboutPage /> },
    //   {
    //     path: "dashboard",
    //     element: (
    //       <Protected>
    //         <DashboardPage />
    //       </Protected>
    //     ),
    //     children: [
    //       { index: true, element: <div>Select a card above.</div> },
    //       { path: "reports", element: <Reports /> },
    //       { path: "settings", element: <Settings /> },
    //     ],
    //   },
      { path: "*", element: <NotFound /> },
    ],
  },
]);