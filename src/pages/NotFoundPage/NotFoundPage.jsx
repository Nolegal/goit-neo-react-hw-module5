import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
// import { GoArrowLeft } from "react-icons/go";

const NotFoundPage = () => {
  const location = useLocation();
  const goBackLink = useRef(location.state ?? "/");
  return (
    <div className="container">
      <h1 className="heading">Page wasn't found.</h1>
      <Link className="goBackLink" to={goBackLink.current}>
       {/*<GoArrowLeft />*/}   Go back
      </Link>
    </div>
  );
};

export default NotFoundPage;