
const LatestProjects = () => {
  return <div>  
     {/* <!--==============================
  Project Area  
==============================--> */}
<div className="project-area-1 space-top overflow-hidden">   
  <div className="portfolio-shape1_1 shape-mockup jump-reverse d-lg-block d-none" data-top="0%" data-right="0">
      <img src=".src/assets/img/service/service-shape1-1.png" alt="img"/>
  </div> 
  <div className="leaf-shape-animation" data-bg-src=".src/assets/img/icon/leaf.svg"></div>
  <div className="container container2">
      <div className="row justify-content-between">
          <div className="col-lg-7">
              <div className="title-area text-center text-lg-start">
                  <span className="sub-title">LATEST PROJECT</span>
                  <h2 className="sec-title">Green thinking for better world</h2>
              </div>
          </div>
          <div className="col-lg-5 text-lg-end text-center align-self-center">
              <a href="project.html" className="btn style4 mb-50 mb-lg-0">Our Latest Projects <i className="fas fa-angle-double-right"></i></a>
          </div>
      </div>
      <div className="row gy-30 justify-content-center">
          <div className="col-xl-3">
              <div className="project-tab-btn filter-menu-active text-center">
                  <button data-filter="*" className="active btn" type="button">All Projects</button>
                  <button className="btn" data-filter=".cat1" type="button">Climate</button>
                  <button className="btn" data-filter=".cat2" type="button">Ecosystem</button>
                  <button className="btn" data-filter=".cat3" type="button">Recycling</button>
              </div>
          </div>
          <div className="col-xl-9">
              <div className="row filter-active gy-4">
                  <div className="col-md-4 filter-item cat1 cat3">
                      <div className="project-card">
                          <div className="project-card-img">
                              <img src=".src/assets/img/project/1-1.jpg" alt="img"/>
                          </div>
                          <div className="project-card-details">
                              <p className="project-card-subtitle"><a href="project-details.html">Climate</a></p>
                              <h3 className="project-card-title"><a href="project-details.html">The Future of…</a></h3>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 filter-item cat1 cat2">
                      <div className="project-card">
                          <div className="project-card-img">
                              <img src=".src/assets/img/project/1-2.jpg" alt="img"/>
                          </div>
                          <div className="project-card-details">
                              <p className="project-card-subtitle"><a href="project-details.html">Climate</a></p>
                              <h3 className="project-card-title"><a href="project-details.html">Urgency of Climate</a></h3>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 filter-item cat2 cat3">
                      <div className="project-card">
                          <div className="project-card-img">
                              <img src=".src/assets/img/project/1-3.jpg" alt="img"/>
                          </div>
                          <div className="project-card-details">
                              <p className="project-card-subtitle"><a href="project-details.html">Recycling</a></p>
                              <h3 className="project-card-title"><a href="project-details.html">Global Politics</a></h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>    
      </div>
  </div>
</div></div>;
};

export default LatestProjects;
