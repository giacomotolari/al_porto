import { FC } from "react";
import Home from "../../../pages/Home";
import Book from "../../../pages/Book";
import Favorites from "../../../pages/Favorites";
import About from "../../../pages/About";

interface Route {
  path: string;
  component: FC;
  protected: boolean;
  redirectUrl: string;
}

const routes: Route[] = [
  {
    path: "/",
    component: Home,
    protected: false,
    redirectUrl: "/",
  },
  {
    path: "/book",
    component: Book,
    protected: false,
    redirectUrl: "/",
  },
  {
    path: "/favorites",
    component: Favorites,
    protected: true,
    redirectUrl: "/",
  },
  {
    path: "/about",
    component: About,
    protected: false,
    redirectUrl: "/",
  },
];

export { routes, type Route };
