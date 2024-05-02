import { useFormikContext } from "formik";
import { useEffect } from "react";

function BeneficiaryForm({ typeId }) {
  const formik = useFormikContext();
  useEffect(() => {
    formik.setFieldValue("type_id", typeId);

    return () => {
      formik.setFieldValue("type_id", "");
    };
  }, []);

  return (
    <div
      className="tab-pane fade show active"
      // id="pills-home"
      // role="tabpanel"
      //   aria-labelledby="pills-home-tab"
    >
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              className={`form-control style-border ${
                formik.touched.email && formik.errors.email && "is-invalid"
              }`}
              name="email"
              id="email1"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
            <div className="invalid-feedback">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Mobile</label>
            <input
              type="text"
              className={`form-control style-border ${
                formik.touched.phone && formik.errors.phone && "is-invalid"
              }`}
              name="phone"
              id="name1"
              placeholder="05xxxxxx"
              {...formik.getFieldProps("phone")}
            />
            <div className="invalid-feedback">
              {formik.touched.phone && formik.errors.phone}
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className={`form-control style-border ${
                formik.touched.password &&
                formik.errors.password &&
                "is-invalid"
              }`}
              name="password"
              id="lname1"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            <div className="invalid-feedback">
              {formik.touched.password && formik.errors.password}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeneficiaryForm;
