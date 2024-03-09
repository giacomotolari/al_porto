interface Paths {
  home: string;
  book: string;
  favorites: string;
  about: string;
  notFound: string;
}

const paths: Paths = {
  home: "/",
  book: "/book",
  favorites: "/favorites",
  about: "/about",
  notFound: "*",
};

export { paths, type Paths };
