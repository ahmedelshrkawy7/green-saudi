const SupplierForm = () => {
  return (
    <div
      className="tab-pane fade"
      id="pills-paypal"
      role="tabpanel"
      aria-labelledby="pills-paypal-tab"
    >
      <div className="row mt-4">
        <div className="form-group col-lg-6">
          <label>Service Type *</label>
          <select className="form-control style-border" name="name2" id="name2">
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
  );
};

export default SupplierForm;
