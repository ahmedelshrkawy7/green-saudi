import { useFormikContext } from "formik";
import { useQuery } from "react-query";
import { getData } from "../../utils/fetchApi";

function PlanterForm({ typeId }) {
  const formik = useFormikContext();
  console.log("🚀 ~ PlanterForm ~ formik:", formik.values);

  const { isLoading, error, data } = useQuery("planter", () =>
    getData(`/user/types?parent_id=${typeId}`)
  );

  return (
    <div
    // className="tab-pane fade"
    // id="pills-profile"
    // role="tabpanel"
    // aria-labelledby="pills-profile-tab"
    >
      <div className="row mt-4">
        <div className="form-group col-lg-6">
          <label> Service Type *</label>
          <select
            className={`form-control style-border ${
              formik.touched.type_id && formik.errors.type_id && "is-invalid"
            }`}
            name="type_id"
            id="name2"
            {...formik.getFieldProps("type_id")}
          >
            <option selected hidden>
              Service Type{" "}
            </option>
            {data?.types.map(({ name, id }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
          <div className="invalid-feedback">
            {formik.touched.type_id && formik.errors.type_id}
          </div>
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
              className={`form-control style-border ${
                formik.touched.email && formik.errors.email && "is-invalid"
              }`}
              name="email"
              id="email2"
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
            <label>Mobile *</label>
            <input
              type="text"
              className={`form-control style-border ${
                formik.touched.phone && formik.errors.phone && "is-invalid"
              }`}
              name="phone"
              id="name2"
              placeholder="+966"
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
              id="lname2"
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

export default PlanterForm;
