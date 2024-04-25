import { useFormikContext } from "formik";

function BeneficiaryForm() {
  const formik = useFormikContext();

  return (
    <div
      className="tab-pane fade show active"
      id="pills-home"
      role="tabpanel"
      //   aria-labelledby="pills-home-tab"
    >
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              className="form-control style-border"
              name="email"
              id="email1"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control style-border"
              name="phone"
              id="name1"
              placeholder="phone"
              {...formik.getFieldProps("phone")}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control style-border"
              name="password"
              id="lname1"
              placeholder="Password"
              {...formik.getFieldProps("password")}
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
  );
}

export default BeneficiaryForm;
