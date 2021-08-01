import "./gallery.css";
import { getSearchImage } from "./api/Api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getMoreImage } from "./api/Api";
function Gallery() {
  const [term, setTerm] = useState();
  const [term1, setTerm1] = useState();
  const [loading, setLoading] = useState(false);

  const key = "UTe_8na_9zX7UPXkvsbB5pIZuYC1U2rHbpWqrNnsL4E";
  const [data, setData] = useState();
  const [page, setPage] = useState(2);
  const [loadmore, SetLoadMore] = useState(false);
  const { handleSubmit } = useForm({
    mode: "onChange",
  });
  const Load = async () => {
    SetLoadMore(true);
    setPage(page + 1);
    const [error, response] = await getMoreImage(key, term, page);
    const temp = response.photos.results;
    const temp1 = data;
    temp.map((tempdata) => {
      return temp1.push(tempdata);
    });
    setData(temp1);
    SetLoadMore(false);
  };
  const onSubmit = async () => {
    if (term1) setTerm(term1);
    else setTerm("Random");
  };
  useEffect(() => {
    localStorage.setItem("key", key);

    const init = async () => {
      setLoading(true);
      const [error, response] = await getSearchImage(key, term);

      setData(response.photos.results);
      // console.log(data);

      setLoading(false);
    };
    init();
  }, [term]);

  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light nav-bar">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">Dashboard</li>
            </ul>

            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End  */}

      <div className="s130 d-flex justify-content-center h-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <input
                id="search"
                type="text"
                placeholder="What type of image are you looking for?"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => {
                  setTerm1(e.target.value);
                }}
              />
            </div>
            <div className="input-field second-wrap">
              <button className="btn-search" type="button" onClick={onSubmit}>
                SEARCH
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        {term ? (
          <div className="justify-content-center">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <div className="justify-content-center">
                {data.length !== 0 ? (
                  <div className="container cont">
                    <div className="row">
                      {data.map((img) => {
                        const ID = img.id;
                        return (
                          <div
                            key={ID}
                            className="col-md-3 col-sm-4 col-xs-6 img-div justify-content-center"
                          >
                            <Link to={`/${ID}`}>
                              <img
                                className="img-responsive img-size"
                                src={img.urls.regular}
                                alt="loading..."
                              />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      {loadmore ? (
                        <div className="d-flex justify-content-center spinnerload">
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          ></div>
                        </div>
                      ) : (
                        <div className="text-center load">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={Load}
                          >
                            Load more Images
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="alert alert-danger">
                    <strong>Oops!</strong> Cannot find what you are looking for.
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <footer className="text-center text-white fcolor footer">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/neeraj-kumar-/"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/neeraj2021"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center text-dark p-3 section">
          <a
            href="mailto:neerajkmahawar2017@gmail.com"
            target="_blank"
            className="text-dark"
          >
            neerajkmahawar2017@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Gallery;
