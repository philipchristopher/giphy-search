import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../routes/RootPage";
import { TrendingPage } from "./TrendingPage";
import { SearchPage } from "../routes/SearchPage";
import { ErrorPage } from "./ErrorPage";

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
    ],
  },
]);

export { router };
