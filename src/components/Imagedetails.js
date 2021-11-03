import "./imagedetails.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingleImage } from "./api/Api";
import { useParams } from "react-router-dom";

function Imagedetails({ match }) {
  const [url, setUrl] = useState();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const { id } = useParams();
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const [error, response] = await getSingleImage(
        localStorage.getItem("key"),
        id
      );
      console.log("err = ", error);
      setUrl(response.urls.raw);
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return <div className="spinner-border text-primary spinner-position"></div>;
  }

  return (
    <>
      <div className="box">
        <img src={url} className="imgSize" alt="" />
      </div>
      )
    </>
  );
}
export default Imagedetails;
