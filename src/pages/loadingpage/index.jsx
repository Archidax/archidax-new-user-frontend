import React from "react";

// Import Images
import loadinglogo from "../../assets/img/loading/loading2d.svg";

function LoadingPage() {
  return (
    <div className="ci-loading-page">
      <img
        src={loadinglogo}
        style={{ width: "80px", height: "80px" }}
        className="ci-loading-img"
        alt="Loading..."
      />
    </div>
  );
}

export default LoadingPage;
