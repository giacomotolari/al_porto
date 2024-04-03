import { forwardRef, ReactNode, Ref } from "react";
import "./page_flip.scss";

interface PageProps {
  pageIndex: number;
  poem: any;
  // addLike: () => void;
  // alert: string;
  text: ReactNode;
  pageNumber: string;
  pageDescription: string;
  title: string;
  titleMargin: string;
  idStyle: string;
}

const Page = forwardRef(
  (
    {
      // pageIndex,
      // poem,
      // addLike,
      // alert,
      text,
      pageNumber,
      pageDescription,
      title,
      titleMargin,
      idStyle,
    }: PageProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div className="Page" id={idStyle} ref={ref}>
        <div className="imgTitleLikeCounteriner">
          <h2 style={{ marginLeft: titleMargin }}>{title} </h2>
          {/* {pageIndex === 0 &&
            poem.description !== "prefazione" &&
            poem.description !== "postfazione" &&
            poem.description !== "indice" &&
            poem.description !== "genreChanger" && (
              <>
                <button onClick={addLike} className="like">
                  <span className="likesCounter">{poem.likes?.length}</span>
                  <span className="alert">{alert}</span>
                </button>
              </>
            )} */}
        </div>
        <div className="text">{text}</div>
        <p id="pageDescription">{pageDescription}</p>
        <span className="pageNumber">{pageNumber}</span>
      </div>
    );
  }
);

export default Page;
