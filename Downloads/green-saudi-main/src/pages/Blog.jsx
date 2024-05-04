const Blog = () => {
  return (
    <div>
      {/* <!--==============================
  Blog Area  
  ==============================--> */}
      <section className="blog-area space">
        <div className="container container2">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="title-area text-center text-lg-start">
                <span className="sub-title">OUR LATEST BLOG</span>
                <h2 className="sec-title">
                  Let’s checkout our all latest news
                </h2>
              </div>
            </div>
            <div className="col-lg-5 text-lg-end text-center align-self-center">
              <a href="blog.html" className="btn style4 mb-50 mb-lg-0">
                Read More Blog <i className="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container container2">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="./src/assets/img/blog/1-1.webp" alt="blog image" />
                    {/* <div className="blog-date">03 Apr</div> */}
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title box-title">
                    <a href="blog-details.html">
                      Go green and reduce your carbon footprint
                    </a>
                  </h3>
                  <p className="blog-text">
                    Going green and reducing your carbon footprint are important
                    steps towards creating…
                  </p>
                </div>
                <div className="blog-bottom">
                  <a href="blog-details.html" className="link-btn ">
                    Read More <i className="fas fa-angle-double-right"></i>
                  </a>
                  {/* <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-comments"></i>Comment 2
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="./src/assets/img/blog/1-2.webp" alt="blog image" />
                    {/* <div className="blog-date">03 Apr</div> */}
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title box-title">
                    <a href="blog-details.html">
                      Make a statement support of the eco
                    </a>
                  </h3>
                  <p className="blog-text">
                    Going green and reducing your carbon footprint are important
                    steps towards creating…
                  </p>
                </div>
                <div className="blog-bottom">
                  <a href="blog-details.html" className="link-btn">
                    Read More <i className="fas fa-angle-double-right"></i>
                  </a>
                  {/* <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-comments"></i>Comment 2
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <div className="blog-img">
                  <a href="blog-details.html">
                    <img src="./src/assets/img/blog/1-3.webp" alt="blog image" />
                    {/* <div className="blog-date">03 Apr</div> */}
                  </a>
                </div>
                <div className="blog-content">
                  <h3 className="blog-title box-title">
                    <a href="blog-details.html">
                      Affordable, targeted media for every one
                    </a>
                  </h3>
                  <p className="blog-text">
                    Going green and reducing your carbon footprint are important
                    steps towards creating…
                  </p>
                </div>
                <div className="blog-bottom">
                  <a href="blog-details.html" className="link-btn">
                    Read More <i className="fas fa-angle-double-right"></i>
                  </a>
                  {/* <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fas fa-comments"></i>Comment 2
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Blog;
