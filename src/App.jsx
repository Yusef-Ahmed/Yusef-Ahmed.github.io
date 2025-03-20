import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "resume",
          element: <Resume />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
