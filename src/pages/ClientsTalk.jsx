const ClientsTalk = () => {
  return (
    <div>
      {/* <!--==============================
  Testimonial Area  
  ==============================--> */}
      <div className="testimonial-area-4 overflow-hidden bg-title space">
         {/* <div
          className="portfolio-shape1_2 shape-mockup d-lg-block d-none"
          style="right: 0px; bottom: 0%;"
        >
          <img src="./src/assets/img/process/process-shape1-2.png" alt="img" />
        </div>  */}
        <div className="container container2">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="title-area">
                <span className="sub-title">CLIENTS TALK</span>
                <h2 className="sec-title text-white">
                  Leading the way to a greener tomorrow
                </h2>
              </div>
            </div>
            <div className="col-lg-auto">
              <div className="sec-btn mb-0">
                <div className="icon-box arrow-style2">
                  <button
                    data-slick-prev=".testi-slider4"
                    className="slick-arrow default"
                  >
                    <i className="fas fa-arrow-left"></i>
                  </button>
                  <button
                    data-slick-next=".testi-slider4"
                    className="slick-arrow default"
                  >
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container2">
          <div
            className="row global-carousel testi-slider4"
            data-slide-show="2"
            data-lg-slide-show="2"
            data-md-slide-show="1"
          >
            <div className="col-lg-6">
              <div className="testi-box style2">
                <div className="media">
                  <div className="testi-box_profile">
                    <div className="testi-box_img">
                      <img src="./src/assets/img/testimonial/2-1.webp" alt="img" />
                    </div>
                    <div className="testi-box_details">
                      <div className="testi-box_review">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="testi-box_name">Wade Warren</h4>
                      <span className="testi-box_desig">CFO</span>
                    </div>
                  </div>
                  <div className="testi-box_icon">
                    <img src="./src/assets/img/icon/quote.svg" alt="img" />
                  </div>
                </div>
                <p className="testi-box_text">
                  Ecology is crucial for our understanding of the natural world,
                  and is becoming increasingly important as human activities,
                  such as pollution, deforestation change{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testi-box style2">
                <div className="media">
                  <div className="testi-box_profile">
                    <div className="testi-box_img">
                      <img src="./src/assets/img/testimonial/2-2.webp" alt="img" />
                    </div>
                    <div className="testi-box_details">
                      <div className="testi-box_review">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="testi-box_name">Warren Marvin</h4>
                      <span className="testi-box_desig">Founder</span>
                    </div>
                  </div>
                  <div className="testi-box_icon">
                    <img src="./src/assets/img/icon/quote.svg" alt="img" />
                  </div>
                </div>
                <p className="testi-box_text">
                  Ecology is crucial for our understanding of the natural world,
                  and is becoming increasingly important as human activities,
                  such as pollution, deforestation change{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <div className="testi-box style2">
                <div className="media">
                  <div className="testi-box_profile">
                    <div className="testi-box_img">
                      <img src="./src/assets/img/testimonial/2-3.webp" alt="img" />
                    </div>
                    <div className="testi-box_details">
                      <div className="testi-box_review">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <h4 className="testi-box_name">Marvin McKinney</h4>
                      <span className="testi-box_desig">Founder</span>
                    </div>
                  </div>
                  <div className="testi-box_icon">
                    <img src="./src/assets/img/icon/quote.svg" alt="img" />
                  </div>
                </div>
                <p className="testi-box_text">
                  Ecology is crucial for our understanding of the natural world,
                  and is becoming increasingly important as human activities,
                  such as pollution, deforestation change{" "}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsTalk;
