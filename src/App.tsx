import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./ui/layout/AppLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import SubscribePage from "./pages/SubscribePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
