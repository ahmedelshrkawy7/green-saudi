import { useFormikContext } from "formik";
import { useQuery } from "react-query";
import { getData } from "../../utils/fetchApi";

const SupplierForm = () => {
  const formik = useFormikContext();

  const { isLoading, error, data } = useQuery("supplier", () =>
    getData("/user/types?parent_id=7")
  );
  console.log("🚀 ~ SupplierForm ~ data:", data);

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

            <option>Tree Provider</option>
            <option>02 Exchange</option>
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
              name="email"
              id="email4"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label>Mobile *</label>
            <input
              type="text"
              className="form-control style-border"
              name="phone"
              id="name4"
              placeholder="Mobile"
              {...formik.getFieldProps("phone")}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>Password</label>
            <input
              type="Password"
              className="form-control style-border"
              name="password"
              id="lname4"
              placeholder="**********"
              {...formik.getFieldProps("password")}
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
