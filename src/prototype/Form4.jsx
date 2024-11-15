import { Form, Formik, useFormik } from "formik";

import { useState } from "react";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Form4 = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("🚀 ~ Form3 ~ state:", state);

  let validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      request_id: state.request_id,
      user_name: state.user_name,
      password: state.password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post("/getPsid", values).then(({ data }) => {
        console.log("🚀 ~ .then ~ data:", data);
        localStorage.setItem("csr", data.data.csr);
      });
    },
  });

  // error("ddddd");

  //   const handleSubmit = () => {
  //     Post.mutate("/user/register", {});
  //   };

  return (
    <div>
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
                          <h2>Psid</h2>
                          <form
                            className="needs-validation"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>request_id *</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.request_id &&
                                      formik.errors.request_id &&
                                      "is-invalid"
                                    }`}
                                    name="request_id"
                                    id="email1"
                                    placeholder="request_id"
                                    {...formik.getFieldProps("request_id")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.request_id &&
                                      formik.errors.request_id}
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>user_name</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.user_name &&
                                      formik.errors.user_name &&
                                      "is-invalid"
                                    }`}
                                    name="user_name"
                                    id="lname1"
                                    placeholder="user_name"
                                    {...formik.getFieldProps("user_name")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.user_name &&
                                      formik.errors.user_name}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>password</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.password &&
                                      formik.errors.password &&
                                      "is-invalid"
                                    }`}
                                    name="user_name"
                                    id="lname1"
                                    placeholder="password"
                                    {...formik.getFieldProps("password")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.password &&
                                      formik.errors.password}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="btn-wrap justify-content-start mt-20">
                              <button type="submit" className="btn style4">
                                next
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

export default Form4;
