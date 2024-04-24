function PlanterForm() {
  return (
    <div
      className="tab-pane fade"
      id="pills-profile"
      role="tabpanel"
      aria-labelledby="pills-profile-tab"
    >
      <div className="row mt-4">
        <div className="form-group col-lg-6">
          <label>Service Type *</label>
          <select className="form-control style-border" name="name2" id="name2">
            <option selected hidden>
              Service Type{" "}
            </option>
            {/* {data?.data[1]?.types?.map((opt) => {
          console.log(
            "🚀 ~ {data?.data?.types?.map ~ opt:",
            opt
          );

          return (
            <option key={opt.id}>{opt.name}</option>
          );
        })} */}
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
  );
}

export default PlanterForm;
