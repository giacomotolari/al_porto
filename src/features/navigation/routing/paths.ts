interface Paths {
  home: "/";
  book: "/book";
  favorites: "/favorites";
  bookmarks: "/bookmarks";
  about: "/about";
  notFound: "*";
}

const paths: Paths = {
  home: "/",
  book: "/book",
  favorites: "/favorites",
  bookmarks: "/bookmarks",
  about: "/about",
  notFound: "*",
};

const pathsList = Object.values(paths);

const pathNotExists = (path: string) => !pathsList.includes(path) && path !== "*";

export { paths, pathsList, pathNotExists, type Paths };
