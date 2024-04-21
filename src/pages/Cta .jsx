import React from "react";

const Cta = () => {
  return (
    <div>
      {/* <!--==============================
  Client Area  
==============================--> */}
      <div
        className="container container2 z-index-common"
        data-pos-for=".cta-area-1"
        data-sec-pos="bottom-half"
      >
        <div className="client-area-2 overflow-hidden text-center">
          <div
            className="row global-carousel"
            data-slide-show="5"
            data-lg-slide-show="4"
            data-md-slide-show="3"
            data-sm-slide-show="3"
          >
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-1.webp" alt="img" />
              </a>
            </div>
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-2.webp" alt="img" />
              </a>
            </div>
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-3.webp" alt="img" />
              </a>
            </div>
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-4.webp" alt="img" />
              </a>
            </div>
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-1.webp" alt="img" />
              </a>
            </div>
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-2.webp" alt="img" />
              </a>
            </div>
            <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-3.webp" alt="img" />
              </a>
            </div>
            {/* <div className="col-xl-auto">
              <a href="blog.html" className="client-wrap">
                <img src="./src/assets/img/update/client/4-4.webp" alt="img" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!--==============================
  Cta Area  
==============================--> */}
      <div className="cta-area-1 bg-theme text-lg-start text-center">
        <div className="container container2">
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-lg-8">
              <h4 className="cta-title text-white mb-0">
                For any query and informations contact with us
              </h4>
            </div>
            <div className="col-lg-auto">
              <a href="contact.html" className="btn style8">
                Send Nessage<i className="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Cta;
