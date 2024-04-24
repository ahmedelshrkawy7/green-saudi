import { useFormikContext, Formik, Form, Field } from "formik";
import { useEffect } from "react";

function BeneficiaryForm() {
  const formik = useFormikContext();
  console.log("🚀 ~ BeneficiaryForm ~ formik:", formik.values);

  //   const { values, setFieldValue, formik } = useFormikContext();
  //   console.log("🚀 ~ BeneficiaryForm ~ values:", values);

  return (
    <Form>
      <div
        className="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
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
                name="Mobile"
                id="name1"
                placeholder="Mobile"
                {...formik.getFieldProps("Mobile")}
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
    </Form>
  );
}

export default BeneficiaryForm;
