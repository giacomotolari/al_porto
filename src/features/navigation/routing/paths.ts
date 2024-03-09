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

export { paths, pathsList, type Paths };
