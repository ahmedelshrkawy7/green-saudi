import { useFormikContext } from "formik";

const Factory = () => {
  const formik = useFormikContext();

  const factoryData = [
    {
      name: "Company Or Project Name",
      formikKey: "name",
    },
    {
      name: "Email",
      formikKey: "name",
    },
    {
      name: "Contact Person",
      formikKey: "name",
    },
    {
      name: "Cities ",
      formikKey: "name",
    },
    {
      name: "Other Location ",
      formikKey: "name",
    },
  ];

  return (
    <div>
      <div className="row mt-5 align-items-center justify-content-between">
        {factoryData.map((input) => {
          return (
            <div className="col-lg-6 mt-4" key={input.formikKey}>
              <div className="form-group">
                <label>{input.name}*</label>
                <input
                  type="password"
                  className={`form-control style-border ${
                    formik.touched.password_confirmation &&
                    formik.errors.password_confirmation &&
                    "is-invalid"
                  }`}
                  name="password_confirmation"
                  id="email1"
                  placeholder="Email Address"
                  {...formik.getFieldProps("password_confirmation")}
                />
                <div className="invalid-feedback">
                  {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Factory;
