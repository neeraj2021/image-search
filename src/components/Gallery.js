import "./gallery.css";
import { getSearchImage } from "./api/Api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getMoreImage } from "./api/Api";
import Header from "./Header";
import Footer from "./Footer";

function Gallery() {
  const [term, setTerm] = useState();
  const [term1, setTerm1] = useState();
  const [loading, setLoading] = useState(false);

  const key = "UTe_8na_9zX7UPXkvsbB5pIZuYC1U2rHbpWqrNnsL4E";
  const location = useLocation();
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
    onSubmit();
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
      <Header />

      <div className="s130 d-flex justify-content-center h-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inner-form">
            <div className="input-field first-wrap">
              <input
                id="search"
                type="text"
                placeholder="Search Images"
                style={{ paddingLeft: "10px" }}
                onChange={(e) => {
                  setTerm1(e.target.value);
                }}
              />
            </div>
            <div className="input-field second-wrap">
              <button
                className="btn-search"
                type="button"
                style={{ fontSize: "30px" }}
                onClick={onSubmit}
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        {term ? (
          <div className="bg-col">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            ) : (
              <div>
                <div className="image-box">
                  {data.length !== 0 ? (
                    <>
                      {data.map((img) => {
                        const ID = img.id;
                        return (
                          <div key={ID} className="img-item">
                            <Link
                              to={`${location.pathname}/${ID}`}
                              target="_blank"
                            >
                              <img
                                className="img-size"
                                src={img.urls.regular}
                                alt="loading..."
                              />
                            </Link>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="alert alert-danger">
                      <strong>Oops!</strong> Cannot find what you are looking
                      for.
                    </div>
                  )}
                </div>

                {loadmore || data.length === 0 ? (
                  <div></div>
                ) : (
                  <div className="load-btn">
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
            )}
          </div>
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </div>
  );
}
export default Gallery;
