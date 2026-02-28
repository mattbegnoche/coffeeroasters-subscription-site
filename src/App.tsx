import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./ui/layout/AppLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import SubscribePage from "./pages/SubscribePage";

function updateMeta(title: string, meta: string) {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", meta);
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => {
          updateMeta(
            "Home | Coffee Roasters",
            "Premium coffee subscription service",
          );
          return null;
        },
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
        loader: () => {
          updateMeta(
            "About Us | Coffee Roasters",
            "Learn about our coffee roasting journey and commitment to quality",
          );
          return null;
        },
      },
      {
        path: "/subscribe",
        element: <SubscribePage />,
        loader: () => {
          updateMeta(
            "Subscribe | Coffee Roasters",
            "Create your perfect coffee subscription plan and enjoy premium coffee delivered to your door",
          );
          return null;
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
