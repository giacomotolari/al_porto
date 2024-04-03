import diAcque from "./di_acque.json";
import DiAmori from "./di_amori.json";
import DiTerre from "./di_terre.json";
import indice from "./indice.json";
import postfazione from "./postfazione.json";

export interface Page {
  title: string;
  text: string;
  description:
    | "indice"
    | "prefazione"
    | "postfazione"
    | "di_acque"
    | "di_amori"
    | "di_terre";
}

const book = {
  diAcque: {
    title: "Di Acque",
    pages: diAcque as Page[],
  },
  diAmori: {
    title: "Di Amori",
    pages: DiAmori as Page[],
  },
  diTerre: {
    title: "Di Terre",
    pages: DiTerre as Page[],
  },
  indice: {
    title: "Indice",
    pages: indice as Page[],
  },
  postfazione: {
    title: "Postfazione",
    pages: postfazione as Page[],
  },
};

const bookPages = [
  book.diAcque.pages,
  book.diAmori.pages,
  book.diTerre.pages,
  book.indice.pages,
  book.postfazione.pages,
];

export { book, bookPages };
