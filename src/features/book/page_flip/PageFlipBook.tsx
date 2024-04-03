import { useState, useEffect, useRef, useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./PageFlip";
// import { useTheme } from "../../ThemeContext";
import { useHistory } from "react-router";
import { bookPages } from "../../../data/book/book";
import "./page_flip_book.scss";

interface PageFlipBookProps {}

export default function PageFlipBook({}: PageFlipBookProps) {
  const book = useRef();
  const indexBook = useRef([]);
  // const { currentUser, setNavActive, backendUrl } = useTheme();
  const history = useHistory();
  let bookWidth = window.outerWidth - window.outerWidth / 10;
  let bookHeight = window.innerHeight - window.innerHeight / 7;

  // const loadPoems = async () => {
  //   const response = await fetch(`${backendUrl}`);
  //   const poemsResponse = await response.json();
  //   setPoems(poemsResponse);
  // };

  // useEffect(() => {
  //   (async () => {
  //     await loadPoems();
  //   })();

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const onFlip = useCallback((e: any) => {
    console.log("Current page: " + e.data);
  }, []);

  const navBannersBook: { title: string; page: number }[] = [
    { title: "indice", page: 0 },
    { title: "prefazione", page: 7 },
    { title: "postfazione", page: 180 },
  ];

  const goToPoem = (poemTitle: string, num: number) => {
    const current: { poemTitle: string; pageCounter: number }[] =
      indexBook.current;
    const poemFound = current.find((item) => item.poemTitle === poemTitle);
    if (poemFound && book.current) {
      // @ts-ignore
      book.current.pageFlip().flip(poemFound.pageCounter + num);
    }
  };

  let pageCounter = 0;

  const handleAddLike = async (poem: any, description: any) => {
    // await fetch(`${backendUrl}/addLike/${description}/${poem._id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   likes: poem.likes,
    //   body: JSON.stringify(currentUser),
    // });
    // (async () => {
    //   await loadPoems();
    // })();
  };

  return (
    <div className="Book">
      {/* <p>{window.innerWidth}</p> */}
      {/* <p>{window.outerWidth}</p> */}
      {/* <p>{window.innerHeight}</p>
      <p>{window.outerHeight}</p> */}

      {/* <ul className="bookNavbar">
        {navBannersBook.map((banner, index) => (
          <li
            key={index}
            // @ts-ignore
            onClick={() => book.current.pageFlip().flip(banner.page)}
          >
            <p>{banner.title}</p>
          </li>
        ))}
      </ul> */}
      {/* @ts-ignore */}
      <HTMLFlipBook
        ref={book}
        onFlip={onFlip}
        flippingTime={1250}
        width={
          window.outerWidth >= 1000 && window.outerWidth <= 1700
            ? bookWidth / 2
            : window.outerWidth >= 1701
            ? bookWidth / 2.9
            : bookWidth
        }
        height={
          window.innerHeight >= 700 && window.innerHeight >= window.innerWidth
            ? bookHeight / 1.2
            : bookHeight
        }
        className="FlipBook"
      >
        {bookPages.map((page, poemIndex) => {
          const arrOfPoemsLines = page.text.split("\n");
          const batchSize =
            page.description === "prefazione" ||
            page.description === "postfazione"
              ? 4
              : 16;
          const amountBatches = Math.ceil(arrOfPoemsLines.length / batchSize);
          const batches = [];
          for (let i = 0; i < amountBatches; i++) {
            const batch = arrOfPoemsLines.slice(
              i * batchSize,
              i * batchSize + batchSize
            );
            batches.push(batch);
          }
          /* @ts-ignore */
          indexBook.current.push({
            poemTitle: page.title,
            pageCounter,
          });
          pageCounter = pageCounter + amountBatches;

          return batches.map((batche, pageIndex) => {
            return (
              <Page
                idStyle={`poem${1 + poemIndex}page${pageIndex + 1}`}
                key={pageIndex}
                pageIndex={pageIndex}
                pageNumber={`${1 + poemIndex}.${pageIndex + 1}`}
                poem={page}
                // ref={book}
                pageDescription={page.description}
                title={
                  pageIndex === 0
                    ? page.title
                    : (page.description === "indice" ||
                        page.description === "prefazione" ||
                        page.description === "postfazione") &&
                      pageIndex !== 0
                    ? ""
                    : "....."
                }
                titleMargin={page.description === "indice" ? "6.5%" : "5%"}
                // alert={page.alert}
                // addLike={() => {
                //   if (currentUser.userName === "anonymousUser") {
                //     navigate("/");
                //     setNavActive([false, true, false, false]);
                //     alert("to like the poems you must be registered");
                //   }
                //   if (
                //     currentUser.userName !== "anonymousUser" &&
                //     poem.likes.find(
                //       (element) => element === currentUser.userName
                //     )
                //   ) {
                //     alert("you can vote only once per poem");
                //   } else handleAddLike(poem, poem.description.slice(3));
                // }}
                text={batche.map((line, index) => {
                  return (
                    <>
                      {page.description === "indice" ? (
                        <p
                          className="bookIndexTitle"
                          onClick={() => {
                            if (pageIndex === 0 && poemIndex === 0) {
                              goToPoem(line, 0);
                            }
                            if (pageIndex === 1) {
                              goToPoem(line, -2);
                            }
                            if (
                              (pageIndex === 0 && page.title === "Di Terre") ||
                              (pageIndex === 0 && page.title === "Di Amori")
                            ) {
                              goToPoem(line, 2);
                            }
                          }}
                          key={index}
                          style={{ cursor: "grabbing" }}
                        >
                          - {line}
                        </p>
                      ) : (
                        <p className="poemsLine" key={index}>
                          {line}
                        </p>
                      )}
                      <br />
                    </>
                  );
                })}
              />
            );
          });
        })}
      </HTMLFlipBook>
    </div>
  );
}
