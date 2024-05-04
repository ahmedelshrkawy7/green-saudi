import { useQuery, useMutation, useQueryClient } from "react-query";
import { getData, postData } from "../../utils/fetchApi";
import { Form, Formik, useFormik } from "formik";
import BeneficiaryForm from "./BeneficiaryForm";
import PlanterForm from "./PlanterForm";
import SupplierForm from "./SupplierForm";
import { useState } from "react";
import * as Yup from "yup";
import { notifySuccess, notifyError } from "../notifications/notify";
import Otp from "./otp/Otp";
import { useNavigate } from "react-router-dom";
import Loginheader from "./Loginheader";

const Reset = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery("users", () =>
    getData("/user/types")
  );
  let validationSchema = Yup.object().shape({
    password_confirmation: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Post.mutate(["/user/password/reset", values]);
    },
  });

  const Post = useMutation(postData, {
    onSuccess: (e) => {
      notifySuccess("Login in successfully ! ");
      // setKey(e?.data?.data.key);
      navigate("/otp", {
        state: e?.data?.data.key,
        email: formik.values.email,
      });
    },
    onError: ({ message }) => {
      notifyError(message);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // error("ddddd");

  //   const handleSubmit = () => {
  //     Post.mutate("/user/register", {});
  //   };

  return (
    <div>
      <Loginheader />

      {/* <!--==============================
  Donation Details 02  
  ==============================--> */}
      <div className="donation-details-area space-top space-extra-bottom overflow-hidden pt-0">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className="col-lg-5 col-xl-6">
              <div className="donation-page-single">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <div className="donation-form">
                      <div className="row">
                        <div className="col-12">
                          <form
                            className="needs-validation"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="row mt-4">
                              <div className="col-lg-12">
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
                                    {formik.touched.password &&
                                      formik.errors.password}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Confirm Password *</label>
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
                                    {...formik.getFieldProps(
                                      "password_confirmation"
                                    )}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.password_confirmation &&
                                      formik.errors.password_confirmation}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="btn-wrap justify-content-between mt-20">
                              <button
                                type="submit"
                                className="btn style4"
                                disabled={Post.isLoading}
                              >
                                Submit
                              </button>
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
        </div>
      </div>
    </div>
  );
};

export default Reset;
