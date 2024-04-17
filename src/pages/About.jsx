
const About = () => {
  return (

//   <!--==============================
//   About Area  
//   ==============================-->
  <div className="space overflow-hidden">
      <div className="about-anim2-1 shape-mockup movingX d-lg-block d-none" data-right="5%" data-top="0">
          <img src="./src/assets/img/normal/about_2-5.svg" alt="img"/>
      </div>
      <div className="leaf-shape-animation2 d-lg-block d-none" data-bg-src="./src/assets/img/normal/about_2-4.svg">
      </div>
      <div className="leaf-shape-animation3 d-lg-block d-none" data-bg-src="./src/assets/img/normal/about_2-6.svg">
      </div>
      <div className="container container2">
          <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                  <div className="about-thumb2 mb-50 mb-lg-0">
                      <div className="about-img-1">
                          <img src="./src/assets/img/normal/about_2-1.webp" alt="img"/>
                      </div>  
                      <div className="about-img-2 video-wrap jump-reverse">
                          <img src="./src/assets/img/normal/about_2-2.webp" alt="img"/>
                          <a href="https://www.youtube.com/watch?v=yfFYBo0jtF0" className="play-btn popup-video">
                              <i className="fas fa-solid fa-play"></i>
                          </a>
                      </div>  
                      <div className="about-shape-1 jump">
                          <img src="./src/assets/img/normal/about_2-3.webp" alt="img"/>
                      </div>  
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="about-content-wrap">
                      <div className="title-area mb-35">
                          <span className="sub-title">ABOUT WITH US</span>
                          <h2 className="sec-title">The true supporter of eco-friendliness</h2>
                      </div>
                      <div className="about-list-wrap">
                          <div className="about-list-box">
                              <div className="about-list-icon">
                                  <i className="fas fa-check"></i>
                              </div>
                              <div className="list-content-area">
                                  <h3 className="list-title">E-Waste Recycling</h3>
                                  <p className="list-text">The goal of ecology is to understand how organisms interact with each other and their environment organisms interact.</p>
                              </div>
                          </div> 
                          <div className="about-list-box">
                              <div className="about-list-icon">
                                  <i className="fas fa-check"></i>
                              </div>
                              <div className="list-content-area">
                                  <h3 className="list-title">Natural Cleaners</h3>
                                  <p className="list-text">Ecologists use a variety of methods, such as field observations, experiments, and modeling, to study the complex.</p>
                              </div>
                          </div> 
                          <div className="about-list-box">
                              <div className="about-list-icon">
                                  <i className="fas fa-check"></i>
                              </div>
                              <div className="list-content-area">
                                  <h3 className="list-title">Ecology is a crucial</h3>
                                  <p className="list-text">Ecology is a crucial field of study, as it helps us understand the impact of human activities on the environment organisms.</p>
                              </div>
                          </div> 
                      </div>
                  </div>                    
              </div>
          </div>
      </div>
  </div>
  )

};

export default About;
