import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "../routes/RootPage";
import { TrendingPage } from "./TrendingPage";
import { SearchPage } from "../routes/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
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
