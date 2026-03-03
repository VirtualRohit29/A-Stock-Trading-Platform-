import React from "react";

const topics = [
  "Online Account Opening",
  "Offline Account Opening",
  "Company, Partnership and HUF Account",
  "Opening",
  "NRI Account Opening",
  "Charges at Zerodha",
  "Zerodha IDFC FIRST Bank 3-in-1 Account",
  "Getting Started",
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div key={index} className="col-4 p-5">
            <h4>
              <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>
              Account Opening
            </h4>

            {topics.map((item, i) => (
              <div key={i}>
                <a
                  href="#"
                  style={{ textDecoration: "none", lineHeight: "2.5" }}
                  onClick={(e) => e.preventDefault()}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
