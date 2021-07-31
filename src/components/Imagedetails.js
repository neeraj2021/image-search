import "./imagedetails.css";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { getSingleImage } from "./api/Api";
function Imagedetails() {
  const [url, setUrl] = useState();
  const [des, setDes] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const FindId = () => {
    let id = "";
    const url = location.pathname;
    let i = url.length - 1;
    while (url[i] !== "/") {
      id += url[i];
      i--;
    }
    id = id.split("").reverse().join("");
    return id;
  };
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const id = FindId();
      const [error, response] = await getSingleImage(
        localStorage.getItem("key"),
        id
      );
      console.log(response);
      setUrl(response.urls.raw);
      setDes(response.alt_description);
      setLoading(false);
    };
    init();
  }, []);
  if (loading) {
    return <div className="spinner-border text-primary spinner-position"></div>;
  }
  return (
    <div>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6 how-img">
            <img src={url} class="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <h4>{des}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Imagedetails;
