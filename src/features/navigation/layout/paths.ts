interface Paths {
  home: string;
  book: string;
  favorites: string;
  bookmark: string;
  about: string;
  notFound: string;
}

const paths: Paths = {
  home: "/",
  book: "/book",
  favorites: "/favorites",
  bookmark: "/bookmark",
  about: "/about",
  notFound: "/404",
};

export { paths, type Paths };
