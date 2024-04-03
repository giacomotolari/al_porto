import diAcque from "./di_acque.json";
import diAmori from "./di_amori.json";
import diTerre from "./di_terre.json";
import indice from "./indice.json";
import postfazione from "./postfazione.json";

export interface Page {
  title: string;
  text: string;
  description:
    | "indice"
    | "prefazione"
    | "postfazione"
    | "di acque"
    | "di amori"
    | "di terre";
}

const book = {
  diAcque: {
    title: "Di Acque",
    pages: diAcque as Page[],
  },
  diAmori: {
    title: "Di Amori",
    pages: diAmori as Page[],
  },
  diTerre: {
    title: "Di Terre",
    pages: diTerre as Page[],
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
  ...book.indice.pages,
  ...book.diAcque.pages,
  ...book.diTerre.pages,
  ...book.diAmori.pages,
  ...book.postfazione.pages,
];

export { book, bookPages };
