import { useFormikContext } from "formik";

const SME = () => {
  const formik = useFormikContext();

  const individualData = [
    {
      opt1: "Power consumption / kw",
      opt2: "Total bill paid of power",
      formikKey: "power",
    },
    {
      opt1: "Water consumption / gallons",
      opt2: "Total bill paid of water",
      formikKey: "power",
    },
    {
      opt1: "fuel consumption / liter",
      opt2: "Total bill paid of fuel",
      formikKey: "power",
    },
    {
      opt1: "Gas Consumption",
      opt2: "Total bill paid of gas",
      formikKey: "power",
    },
    {
      opt1: "Coal Consumption",
      opt2: "Total bill paid of coal",
      formikKey: "power",
    },
    {
      opt1: "Number of dependences",

      formikKey: "power",
    },
  ];

  return (
    <div>
      {individualData.map((row) => {
        return (
          <div
            className="row mt-4 align-items-center justify-content-between"
            key={row.formikKey}
          >
            <div className="col-lg-5">
              <div className="form-group">
                <label>{row.opt1}</label>
                <input
                  type="text"
                  className={`form-control style-border ${
                    formik.touched[row.formikKey] &&
                    formik.errors[row.formikKey] &&
                    "is-invalid"
                  }`}
                  name="power"
                  placeholder="Write Here"
                  {...formik.getFieldProps(row.formikKey)}
                />
                <div className="invalid-feedback">
                  {formik.touched[row.formikKey] &&
                    formik.errors[row.formikKey]}
                </div>
              </div>
            </div>

            {row.opt2 && (
              <>
                <div className="col-2 align-items-center text-center"> OR</div>
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>{row.opt2}*</label>
                    <input
                      type="text"
                      className={`form-control style-border ${
                        formik.touched[row.formikKey] &&
                        formik.errors[row.formikKey] &&
                        "is-invalid"
                      }`}
                      name="Power"
                      placeholder="Write Here"
                      {...formik.getFieldProps(row.formikKey)}
                    />
                    <div className="invalid-feedback">
                      {formik.touched[row.formikKey] &&
                        formik.errors[row.formikKey]}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SME;
