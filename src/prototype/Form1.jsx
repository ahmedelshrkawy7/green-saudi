import { Form, Formik, useFormik } from "formik";

import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Axios } from "../utils/fetchApi";

const Form1 = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  let validationSchema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      common_name: "TST-886431145-312345678900003",
      serial_number: "1-TST|2-TST|3-ed22f1d8-e6a2-1118-9b58-d9a8f11e445f",
      organization_identifier: "312345678900003",
      organization_unit_name: "3123456789",
      organization_name: "3123456789",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      Axios.post("/genrateCsr", values).then(({ data }) => {
        console.log("🚀 ~ .then ~ data:", data);
        localStorage.setItem("csr", data.data.csr);
        localStorage.setItem("common_name", formik.values.common_name);
        navigate("/form2");
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
                                  <label>common_name *</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.common_name &&
                                      formik.errors.common_name &&
                                      "is-invalid"
                                    }`}
                                    name="common_name"
                                    id="email1"
                                    placeholder="common_name"
                                    {...formik.getFieldProps("common_name")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.common_name &&
                                      formik.errors.common_name}
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>serial_number</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.serial_number &&
                                      formik.errors.serial_number &&
                                      "is-invalid"
                                    }`}
                                    name="serial_number"
                                    id="lname1"
                                    placeholder="serial_number"
                                    {...formik.getFieldProps("serial_number")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.serial_number &&
                                      formik.errors.serial_number}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>organization_identifier</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.organization_identifier &&
                                      formik.errors.organization_identifier &&
                                      "is-invalid"
                                    }`}
                                    name="organization_identifier"
                                    id="lname1"
                                    placeholder="organization_identifier"
                                    {...formik.getFieldProps(
                                      "organization_identifier"
                                    )}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.organization_identifier &&
                                      formik.errors.organization_identifier}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>organization_unit_name</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.organization_unit_name &&
                                      formik.errors.organization_unit_name &&
                                      "is-invalid"
                                    }`}
                                    name="organization_unit_name"
                                    id="lname1"
                                    placeholder="organization_unit_name"
                                    {...formik.getFieldProps(
                                      "organization_unit_name"
                                    )}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.organization_unit_name &&
                                      formik.errors.organization_unit_name}
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>organization_name</label>
                                  <input
                                    type="text"
                                    className={`form-control style-border ${
                                      formik.touched.organization_name &&
                                      formik.errors.organization_name &&
                                      "is-invalid"
                                    }`}
                                    name="organization_name"
                                    id="lname1"
                                    placeholder="organization_name"
                                    {...formik.getFieldProps(
                                      "organization_name"
                                    )}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.organization_name &&
                                      formik.errors.organization_name}
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

export default Form1;
