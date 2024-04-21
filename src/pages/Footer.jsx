import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <!--==============================
  Footer Area
==============================--> */}
      <footer
        className="footer-wrapper footer-layout1 overflow-hidden"
        data-bg-src="./src/assets/img/bg/footer-bg-1.svg"
      >
        <div className="container">
          <div className="footer-top">
            <div className="row gy-4 align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="info-card">
                  <div className="info-card_icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-card_content">
                    <h4 className="info-card_title">Our Location</h4>
                    <p className="info-card_text">
                      2416 Mapleview DriveTampa, <br />
                      FL 33634
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-card">
                  <div className="info-card_icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-card_content">
                    <h4 className="info-card_title">Call us</h4>
                    <p className="info-card_text">
                      Telephone : <a href="tel:0029129102320">0029129102320</a>
                    </p>
                    <p className="info-card_text">
                      Mobile : <a href="tel:0029129102320">000 2324 39493</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-card">
                  <div className="info-card_icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-card_content">
                    <h4 className="info-card_title">Our Email</h4>
                    <p className="info-card_text">
                      Main Email :{" "}
                      <a href="mailto:contact@website">contact@website</a>
                    </p>
                    <p className="info-card_text">
                      ComInquiries :{" "}
                      <a href="tel:info@mail.com">Info@mail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-area">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3 col-lg-4">
                <div className="widget footer-widget">
                  <div className="widget-about">
                    <div className="footer-logo">
                      <a href="index.html">
                        <img src="./src/assets/img/new_logo.png" alt="Ecofine" />
                      </a>
                    </div>
                    <p className="about-text">
                      Protecting biodiversity and natural habitats is crucial
                      for maintaining a healthy and sustainable ecology.
                    </p>
                    <div className="social-btn style2">
                      {/* <a href="https://facebook.com/" tabindex="0"><i className="fab fa-facebook-f"></i></a>
                              <a href="https://twitter.com/" tabindex="0"><i className="fab fa-twitter"></i></a>
                              <a href="https://www.instagram.com/" tabindex="0"><i className="fab fa-instagram"></i></a>
                              <a href="https://linkedin.com/" tabindex="0"><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto col-lg-4">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <a href="blog.html">Water Conservation</a>
                      </li>
                      <li>
                        <a href="blog.html">Global Warming</a>
                      </li>
                      <li>
                        <a href="blog.html">Climate Adaptation</a>
                      </li>
                      <li>
                        <a href="blog.html">Urban planning</a>
                      </li>
                      <li>
                        <a href="blog.html">Energy Consulting</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 col-lg-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent News</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="./src/assets/img/widget/recent-post1-1.webp"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Go green and reduce your carbon…
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fas fa-calendar"></i> April 3, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="./src/assets/img/widget/recent-post1-2.webp"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Make a statement support of the…
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fas fa-calendar"></i> April 3, 2024
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Newsletter</h3>
                  <p className="footer-text">
                    Your opinion is important to us. So contact us for any
                    service.
                  </p>
                  <form className="newsletter-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Your Email Address"
                        required=""
                      />
                    </div>
                    <button type="submit" className="btn">
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row gy-3 justify-content-lg-between justify-content-center">
              <div className="col-auto align-self-center">
                <p className="copyright-text">
                  © Copyright 2024 <a href="#">Ecofine.</a> All Rights Reserved
                </p>
              </div>
              <div className="col-auto align-self-center">
                <div className="footer-links">
                  <ul>
                    <li>
                      <a href="about.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="about.html">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="about.html">Join Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
