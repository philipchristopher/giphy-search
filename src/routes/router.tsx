import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../routes/RootPage";
import { TrendingPage } from "./TrendingPage";
import { SearchPage } from "../routes/SearchPage";
import { ErrorPage } from "./ErrorPage";
import { SavedPage } from "./SavedPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TrendingPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "search/:query",
        element: <SearchPage />,
      },
      {
        path: "saved",
        element: <SavedPage />,
      },
    ],
  },
]);

export { router };
