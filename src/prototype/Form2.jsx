import { Form, Formik, useFormik } from "formik";

import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Axios } from "../utils/fetchApi";

const Form2 = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  let validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      otp: "123345",
      csr: localStorage.getItem("csr"),
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Axios.post("/getCsid", values).then(({ data }) => {
        navigate("/form3", { state: data.data });
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
                          <form
                            className="needs-validation"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>otp *</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.otp &&
                                      formik.errors.otp &&
                                      "is-invalid"
                                    }`}
                                    name="otp"
                                    id="email1"
                                    placeholder="otp"
                                    {...formik.getFieldProps("otp")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.otp && formik.errors.otp}
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Csr</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.csr &&
                                      formik.errors.csr &&
                                      "is-invalid"
                                    }`}
                                    name="csr"
                                    id="lname1"
                                    placeholder="csr"
                                    {...formik.getFieldProps("csr")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.csr && formik.errors.csr}
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

export default Form2;
