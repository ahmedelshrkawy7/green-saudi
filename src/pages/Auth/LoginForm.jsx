const LoginForm = () => {
  return (
    <div>
      {/* <!--==============================
  Donation Details 02  
  ==============================--> */}
      <div className="donation-details-area space-top space-extra-bottom overflow-hidden pt-0">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className="col-lg-7 col-xl-8">
              <div className="donation-page-single">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <form className="donation-form ">
                      <div className="row">
                        {/* <div className="col-lg-6">
                          <div className="form-group form-icon-left">
                            <i className="fas fa-dollar-sign"></i>
                            <input
                              type="number"
                              className="form-control style-border"
                              name="dollar"
                              id="dollar"
                              placeholder="100.00"
                            />
                          </div>
                        </div> */}
                        <div className="col-12">
                          {/* <div className="row g-2">
                            <div className="col-auto">
                              <button className="btn style-border">
                                $10.00
                              </button>
                            </div>
                            <div className="col-auto">
                              <button className="btn style-border">
                                $25.00
                              </button>
                            </div>
                            <div className="col-auto">
                              <button className="btn style-border">
                                $50.00
                              </button>
                            </div>
                            <div className="col-auto">
                              <button className="btn style-border">
                                $100.00
                              </button>
                            </div>
                            <div className="col-auto">
                              <button className="btn style-border">
                                $250.00
                              </button>
                            </div>
                            <div className="col-auto">
                              <button className="btn style-border">
                                Custom Amount
                              </button>
                            </div>
                          </div> */}
                          {/* <h6 className="form-title">Select Payment Method</h6> */}
                          <ul
                            className="nav nav-pills"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                Beneficiary
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                {" "}
                                Planter
                              </button>
                            </li>

                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-paypal-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-paypal"
                                type="button"
                                role="tab"
                                aria-controls="pills-paypal"
                                aria-selected="false"
                              >
                                {" "}
                                Supplier
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                            >
                              {/* <h6 className="form-title">Personal Info</h6> */}
                              <div className="row mt-4">
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Email Address *</label>
                                    <input
                                      type="email"
                                      className="form-control style-border"
                                      name="email1"
                                      id="email1"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Mobile</label>
                                    <input
                                      type="text"
                                      className="form-control style-border"
                                      name="name1"
                                      id="name1"
                                      placeholder="Mobile"
                                    />
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Password</label>
                                    <input
                                      type="text"
                                      className="form-control style-border"
                                      name="lname1"
                                      id="lname1"
                                      placeholder="Password"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="btn-wrap justify-content-between mt-20">
                                <button type="submit" className="btn style4">
                                  Register
                                </button>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                            >
                              <div className="row mt-4">
                              <div className="form-group col-lg-6">
                                    <label>Service Type *</label>
                                    <select
                                      className="form-control style-border"
                                      name="name2"
                                      id="name2"
                                    >
                                      <option selected hidden>
                                        Service Type{" "}
                                      </option>
                                      <option>Individual</option>
                                      <option>SME</option>
                                      <option>Government</option>
                                    </select>
                                    {/* <input
                                      type="text"
                                      className="form-control style-border"
                                      name="name2"
                                      id="name2"
                                      placeholder="First Name"
                                    /> */}
                                  </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Email Address *</label>
                                    <input
                                      type="email"
                                      className="form-control style-border"
                                      name="email2"
                                      id="email2"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Mobile *</label>
                                    <input
                                      type="text"
                                      className="form-control style-border"
                                      name="name2"
                                      id="name2"
                                      placeholder="+966"
                                    />
                                  </div>
                                </div>
                                
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Password</label>
                                    <input
                                      type="password"
                                      className="form-control style-border"
                                      name="lname2"
                                      id="lname2"
                                      placeholder="Password"
                                    />
                                  </div>
                                </div>

                                <div className="btn-wrap justify-content-between mt-20">
                                  <button type="submit" className="btn style4">
                                    Register
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div
                              className="tab-pane fade"
                              id="pills-paypal"
                              role="tabpanel"
                              aria-labelledby="pills-paypal-tab"
                            >
                              <div className="row mt-4">
                              <div className="form-group col-lg-6">
                                  <label>Service Type *</label>
                                  <select
                                    className="form-control style-border"
                                    name="name2"
                                    id="name2"
                                  >
                                    <option selected hidden>
                                      Service Type{" "}
                                    </option>
                                    <option>Individual</option>
                                    <option>SME</option>
                                    <option>Government</option>
                                  </select>
                                  {/* <input
                                      type="text"
                                      className="form-control style-border"
                                      name="name2"
                                      id="name2"
                                      placeholder="First Name"
                                    /> */}
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Email Address *</label>
                                    <input
                                      type="email"
                                      className="form-control style-border"
                                      name="email4"
                                      id="email4"
                                      placeholder="Email Address"
                                    />
                                  </div>
                                </div>
                              
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Mobile *</label>
                                    <input
                                      type="text"
                                      className="form-control style-border"
                                      name="name4"
                                      id="name4"
                                      placeholder="Mobile"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label>Password</label>
                                    <input
                                      type="Password"
                                      className="form-control style-border"
                                      name="lname4"
                                      id="lname4"
                                      placeholder="**********"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="btn-wrap justify-content-between mt-20">
                                {/* <h4 className="total-donate mb-0">
                                  Donation Total: $100.00
                                </h4> */}
                                <button type="submit" className="btn style4">
                                  Register
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
