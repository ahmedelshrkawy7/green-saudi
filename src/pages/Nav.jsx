
const Nav = () => {
  return (
    <div>
      {/* <!--==============================
Header Area
==============================--> */}
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>Address: New York 20245, United States Of America</li>
                    <li>
                      Hot Link:<a href="tel:6295550129">(629) 555-0129</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <span className="social-title">Follow On :</span>
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          {/* <!-- Main Menu Area --> */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="index.html">
                      {" "}
                      <img src="./src/assets/img/new_logo.png" alt="logo"  style={{width:"200px" }}/>{" "}
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="menu-item-has-children">
                        <a  href="#">
                          Home
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a title="New Demo" href="#">
                              Multipage
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="index.html">Home One</a>
                              </li>
                              <li>
                                <a href="home-2.html">Home Two</a>
                              </li>
                              <li>
                                <a href="home-3.html">Home Three</a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-4.html">
                                  Home Four
                                </a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-5.html">
                                  Home Five
                                </a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-6.html">
                                  Home Six
                                </a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-7.html">
                                  Home Seven
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a title="New Demo" href="#">
                              RTL
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="home-1-rtl.html">Home One RTL</a>
                              </li>
                              <li>
                                <a href="home-2-rtl.html">Home Two RTL</a>
                              </li>
                              <li>
                                <a href="home-3-rtl.html">Home Three RTL</a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-4-rtl.html">
                                  Home Four RTL
                                </a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-5-rtl.html">
                                  Home Five RTL
                                </a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-6-rtl.html">
                                  Home Six RTL
                                </a>
                              </li>
                              <li>
                                <a title="New Demo" href="home-7-rtl.html">
                                  Home Seven RTL
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">About Us</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="about-2.html">About Two</a>
                          </li>
                          <li>
                            <a href="about-3.html">About Three</a>
                          </li>
                          <li>
                            <a href="about-4.html">About Four</a>
                          </li>
                          <li>
                            <a href="about-5.html">About Five</a>
                          </li>
                          <li>
                            <a href="about-6.html">About Six</a>
                          </li>
                          <li>
                            <a href="about-7.html">About Seven</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-2.html">Service Two</a>
                          </li>
                          <li>
                            <a href="service-3.html">Service Three</a>
                          </li>
                          <li>
                            <a href="service-4.html">Service Four</a>
                          </li>
                          <li>
                            <a href="service-5.html">Service Five</a>
                          </li>
                          <li>
                            <a href="service-6.html">Service Six</a>
                          </li>
                          <li>
                            <a href="service-7.html">Service Seven</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a /*title="Mega Menu"*/ href="#">
                          Pages
                        </a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">About RTL Page</a>
                            <ul>
                              <li>
                                <a href="about-rtl.html">About RTL</a>
                              </li>
                              <li>
                                <a href="about-2-rtl.html">About Two RTL</a>
                              </li>
                              <li>
                                <a href="about-3-rtl.html">About Three RTL</a>
                              </li>
                              <li>
                                <a href="about-4-rtl.html">About Four RTL</a>
                              </li>
                              <li>
                                <a href="about-5-rtl.html">About Five RTL</a>
                              </li>
                              <li>
                                <a href="about-6-rtl.html">About Six RTL</a>
                              </li>
                              <li>
                                <a href="about-7-rtl.html">About Seven RTL</a>
                              </li>
                            </ul>
                            <a href="#">Service RTL Page</a>
                            <ul>
                              <li>
                                <a href="service-rtl.html">Service RTL</a>
                              </li>
                              <li>
                                <a href="service-2-rtl.html">Service Two RTL</a>
                              </li>
                              <li>
                                <a href="service-3-rtl.html">
                                  Service Three RTL
                                </a>
                              </li>
                              <li>
                                <a href="service-4-rtl.html">
                                  Service Four RTL
                                </a>
                              </li>
                              <li>
                                <a href="service-5-rtl.html">
                                  Service Five RTL
                                </a>
                              </li>
                              <li>
                                <a href="service-6-rtl.html">Service Six RTL</a>
                              </li>
                              <li>
                                <a href="service-7-rtl.html">
                                  Service Seven RTL
                                </a>
                              </li>
                              <li>
                                <a href="service-details-rtl.html">
                                  Service Details RTL
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Project Page</a>
                            <ul>
                              <li>
                                <a href="project.html">Project</a>
                              </li>
                              <li>
                                <a href="project-2.html">Project Two</a>
                              </li>
                              <li>
                                <a href="project-3.html">Project Three</a>
                              </li>
                              <li>
                                <a href="project-4.html">Project Four</a>
                              </li>
                              <li>
                                <a href="project-5.html">Project Five</a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                            </ul>
                            <a href="#">Project RTL Page</a>
                            <ul>
                              <li>
                                <a href="project-rtl.html">Project RTL</a>
                              </li>
                              <li>
                                <a href="project-2-rtl.html">Project Two RTL</a>
                              </li>
                              <li>
                                <a href="project-3-rtl.html">
                                  Project Three RTL
                                </a>
                              </li>
                              <li>
                                <a href="project-4-rtl.html">
                                  Project Four RTL
                                </a>
                              </li>
                              <li>
                                <a href="project-5-rtl.html">
                                  Project Five RTL
                                </a>
                              </li>
                              <li>
                                <a href="project-details-rtl.html">
                                  Project Details RTL
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Donation Page</a>
                            <ul>
                              <li>
                                <a href="donation.html">Donation</a>
                              </li>
                              <li>
                                <a href="donation-2.html">Donation Two</a>
                              </li>
                              <li>
                                <a href="donation-3.html">Donation Three</a>
                              </li>
                              <li>
                                <a href="donation-4.html">Donation Four</a>
                              </li>
                              <li>
                                <a href="donation-details.html">
                                  Donation Single
                                </a>
                              </li>
                            </ul>
                            <a href="#">Donation RTL Page</a>
                            <ul>
                              <li>
                                <a href="donation-rtl.html">Donation RTL</a>
                              </li>
                              <li>
                                <a href="donation-2-rtl.html">
                                  Donation Two RTL
                                </a>
                              </li>
                              <li>
                                <a href="donation-3-rtl.html">
                                  Donation Three RTL
                                </a>
                              </li>
                              <li>
                                <a href="donation-4-rtl.html">
                                  Donation Four RTL
                                </a>
                              </li>
                              <li>
                                <a href="donation-details-rtl.html">
                                  Donation Single RTL
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Team Page</a>
                            <ul>
                              <li>
                                <a href="team.html">Team One</a>
                              </li>
                              <li>
                                <a href="team-2.html">Team Two</a>
                              </li>
                              <li>
                                <a href="team-3.html">Team Three</a>
                              </li>
                              <li>
                                <a href="team-4.html">Team Four</a>
                              </li>
                              <li>
                                <a href="team-5.html">Team Five</a>
                              </li>
                              <li>
                                <a href="team-6.html">Team Six</a>
                              </li>
                              <li>
                                <a href="team-7.html">Team Seven</a>
                              </li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                            </ul>
                            <a href="#">Team RTL Page</a>
                            <ul>
                              <li>
                                <a href="team-rtl.html">Team One RTL</a>
                              </li>
                              <li>
                                <a href="team-2-rtl.html">Team Two RTL</a>
                              </li>
                              <li>
                                <a href="team-3-rtl.html">Team Three RTL</a>
                              </li>
                              <li>
                                <a href="team-4-rtl.html">Team Four RTL</a>
                              </li>
                              <li>
                                <a href="team-5-rtl.html">Team Five RTL</a>
                              </li>
                              <li>
                                <a href="team-6-rtl.html">Team Six RTL</a>
                              </li>
                              <li>
                                <a href="team-7-rtl.html">Team Seven RTL</a>
                              </li>
                              <li>
                                <a href="team-details-rtl.html">
                                  Team Details RTL
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Blog RTL Page</a>
                            <ul>
                              <li>
                                <a href="blog-rtl.html">classNameic Blog RTL</a>
                              </li>
                              <li>
                                <a href="blog-1-rtl.html">Grid Blog One RTL</a>
                              </li>
                              <li>
                                <a href="blog-2-rtl.html">Grid Blog Two RTL</a>
                              </li>
                              <li>
                                <a href="blog-3-rtl.html">
                                  Grid Blog Three RTL
                                </a>
                              </li>
                              <li>
                                <a href="blog-4-rtl.html">Grid Blog Four RTL</a>
                              </li>
                              <li>
                                <a href="blog-5-rtl.html">Grid Blog Five RTL</a>
                              </li>
                              <li>
                                <a href="blog-6-rtl.html">Grid Blog Six RTL</a>
                              </li>
                              <li>
                                <a href="blog-7-rtl.html">
                                  Grid Blog Seven RTL
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-rtl.html">
                                  Blog Details RTL
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-2-rtl.html">
                                  Blog Details 02 RTL
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-3-rtl.html">
                                  Blog Details 03 RTL
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Other Pages</a>
                            <ul>
                              <li>
                                <a href="testimonial.html">Testimonial</a>
                              </li>
                              <li>
                                <a href="testimonial-2.html">Testimonial Two</a>
                              </li>
                              <li>
                                <a href="testimonial-3.html">
                                  Testimonial Three
                                </a>
                              </li>
                              <li>
                                <a href="testimonial-4.html">
                                  Testimonial Four
                                </a>
                              </li>
                              <li>
                                <a href="testimonial-rtl.html">
                                  Testimonial RTL
                                </a>
                              </li>
                              <li>
                                <a href="testimonial-2-rtl.html">
                                  Testimonial Two RTL
                                </a>
                              </li>
                              <li>
                                <a href="testimonial-3-rtl.html">
                                  Testimonial Three RTL
                                </a>
                              </li>
                              <li>
                                <a href="testimonial-4-rtl.html">
                                  Testimonial Four RTL
                                </a>
                              </li>
                              <li>
                                <a href="faq.html">Faq Page</a>
                              </li>
                              <li>
                                <a href="faq-rtl.html">Faq RTL Page</a>
                              </li>
                              <li>
                                <a href="contact-rtl.html">Contact RTL Page</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">classNameic Blog</a>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Grid Blog</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog-1.html">Blog One</a>
                              </li>
                              <li>
                                <a href="blog-2.html">Blog Two</a>
                              </li>
                              <li>
                                <a href="blog-3.html">Blog Three</a>
                              </li>
                              <li>
                                <a href="blog-4.html">Blog Four</a>
                              </li>
                              <li>
                                <a href="blog-5.html">Blog Five</a>
                              </li>
                              <li>
                                <a href="blog-6.html">Blog Six</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">Blog Details</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog-details.html">Right Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-details-2.html">Left Sidebar</a>
                              </li>
                              <li>
                                <a href="blog-details-3.html">No Sidebar</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button type="button" className="menu-toggle icon-btn">
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <a href="contact.html" className="btn">
                      Get A Quote
                      <i className="fas fa-angle-double-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
