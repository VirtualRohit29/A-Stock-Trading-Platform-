import React from "react";
import googlePlay from "../../media/googlePlayBadge.svg";
import appStore from "../../media/appstoreBadge.svg";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>

          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>

          <div className="mt-3">
            <img src={googlePlay} alt="Google Play" />
            <img
              src={appStore}
              alt="App Store"
              style={{ marginLeft: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
