import { useHistory } from "react-router";
import { paths } from "../navigation/routing/paths";
import "./book_3D.scss";

export default function Book3D() {
  const history = useHistory();
  return (
    <div id="book_3D" onClick={() => history.push(paths.book)}>
      <div className="front">
        <div className="cover">
          <section>
            <p style={{ fontSize: "1.5vw" }} className="author">
              Duilia Dias
            </p>
            <br />
            <br />
            <br />
            <br />
            <p
              style={{ fontWeight: "bolder", fontSize: "2.5vw" }}
              className="author"
            >
              Al Porto
            </p>
            <br />
            <p
              style={{ fontFamily: "italic", fontSize: "1.5vw" }}
              className="author"
            >
              Poesie
            </p>

            <p
              style={{ fontFamily: "italic", fontSize: "1.5vw" }}
              className="author"
            >
              di acque, di terre, di amori
            </p>
          </section>
        </div>
      </div>
      <div className="left-side">
        <h2>
          <span>Duilia Dias</span>
          <span>Al Porto</span>
          <span>2021</span>
        </h2>
      </div>
    </div>
  );
}
