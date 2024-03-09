import { FC } from "react";
import Home from "../../../pages/Home";
import Book from "../../../pages/Book";
import Favorites from "../../../pages/Favorites";
import Bookmarks from "../../../pages/Bookmarks";
import About from "../../../pages/About";
import { paths } from "./paths";
import NotFound from "../../../pages/NotFound";

interface PublicRoute {
  path: string;
  component: FC;
}

interface ProtectedRoute extends PublicRoute {
  protected: true;
  redirectUrl: string;
}

type Route = PublicRoute | ProtectedRoute;

const routes: Route[] = [
  {
    path: paths.notFound,
    component: NotFound,
  },
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.book,
    component: Book,
  },
  {
    path: paths.bookmarks,
    component: Bookmarks,
  },
  {
    path: paths.favorites,
    component: Favorites,
  },
  {
    path: paths.about,
    component: About,
  },
];

export { routes, type Route, type PublicRoute, type ProtectedRoute };
