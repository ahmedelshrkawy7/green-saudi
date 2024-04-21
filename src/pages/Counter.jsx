const Counter = () => {
  return (
    <>
      {/* <!--==============================
//   Counter Area  
//   ==============================--> */}
      <div
        className="counter-area-1"
        data-pos-for=".service-area-1"
        data-sec-pos="top-half"
      >
        <div className="container container2">
          <div
            className="counter-wrap"
            data-bg-src="./src/assets/img/bg/counter-1-1-bg.jpg"
          >
            <div className="row gy-40 justify-content-lg-between justify-content-center align-items-center">
              <div className="col-sm-6 col-lg-auto">
                <div className="counter-card justify-content-left " >
                  <h2 className="counter-card_number">
                    <span className="counter-number">Compliances </span>
                  </h2>
                  <h2 className="counter-card_number">
                    <span className="counter-number" >with</span>
                  </h2>
                  {/* <p className="counter-card_text">Team member</p> */}
                </div>
              </div>
              <div className="col-sm-6 col-lg-auto">
                  <img src="./src/assets/img/counter/1.png"/>
                {/* <div className="counter-card">
                  <h2 className="counter-card_number">
                    <span className="counter-number">10</span>k+
                  </h2>
                  <p className="counter-card_text">Complete project</p>
                </div> */}
              </div>
              <div className="col-sm-6 col-lg-auto">
              <img src="./src/assets/img/counter/2.png" style={{width:"300px"}}/>
                {/* <div className="counter-card">
                  <h2 className="counter-card_number">
                    <span className="counter-number">20</span>+
                  </h2>
                  <p className="counter-card_text">Winning award</p>
                </div> */}
              </div>
              {/* <div className="col-sm-6 col-lg-auto">
                <div className="counter-card">
                  <h2 className="counter-card_number">
                    <span className="counter-number">900</span>+
                  </h2>
                  <p className="counter-card_text">Client review</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
