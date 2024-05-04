import { useState } from "react";
import { Formik, useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import { BsPerson } from "react-icons/bs";
import { TbBuildingFactory, TbSquareLetterX } from "react-icons/tb";

import { useNavigate } from "react-router-dom";
import Loginheader from "../../Auth/Loginheader";
import SubmitBtn from "../../../components/SubmitBtn";

const OffsetDetails = () => {
  const [type, setType] = useState(0);
  const validationSchema = {};
  // const Post = useMutation(postData);
  // const { isLoading, error, data } = useQuery("users", () =>
  //   getData("/user/types")
  // );

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      navigate("/auth/login");
    },
  });

  return (
    <>
      <Loginheader title="OFFSET NOW" />

      <div className="offset space-top space-extra-bottom overflow-hidden pt-0  d-flex mt-5 ">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className=" col-12 col-lg-10 col-xl-8 justify-content-center ">
              <div className="donation-page-single ">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <Formik
                      initialValues={{
                        phone: "",
                        password: "",
                        email: "",
                        name: "Ahmed",
                        type_id: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values) => {
                        navigate("/offsetstatistics");
                      }}
                    >
                      <div className="donation-form m-0  ">
                        <div className="row justify-content-center">
                          <div className="col-10 ">
                            <form
                              onSubmit={formik.handleSubmit}
                              className="w-100"
                            >
                              <div className="row mt-5 align-items-center justify-content-between">
                                <div className="col-lg-12 ">
                                  <div className="form-group">
                                    <label>Choose Offset Type *</label>
                                    <select   className={`form-control style-border ${
                                        formik.touched.password_confirmation &&
                                        formik.errors.password_confirmation &&
                                        "is-invalid"
                                      }`}
                                      name="password_confirmation"
                                      id="email1"
                                      placeholder="Email Address"
                                      {...formik.getFieldProps(
                                        "password_confirmation"
                                      )}>
                                        <option>General</option>
                                        <option>Region</option>
                                        <option>Project</option>

                                    </select>
                                   
                                    <div className="invalid-feedback">
                                      {formik.touched.password_confirmation &&
                                        formik.errors.password_confirmation}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 mt-4">
                                  <div className="form-group">
                                    <label>Total Of Trees*</label>
                                    <input
                                      type="password"
                                      className={`form-control style-border ${
                                        formik.touched.password_confirmation &&
                                        formik.errors.password_confirmation &&
                                        "is-invalid"
                                      }`}
                                      name="password_confirmation"
                                      id="email1"
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
                                <div className="col-lg-12 mt-4">
                                  <div className="form-group">
                                    <label>Sub Total *</label>
                                    <input
                                      type="password"
                                      className={`form-control style-border ${
                                        formik.touched.password_confirmation &&
                                        formik.errors.password_confirmation &&
                                        "is-invalid"
                                      }`}
                                      name="password_confirmation"
                                      id="email1"
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
                                <div className="col-lg-12 mt-4">
                                  <div className="form-group">
                                    <label>VAT *</label>
                                    <input
                                      type="password"
                                      className={`form-control style-border ${
                                        formik.touched.password_confirmation &&
                                        formik.errors.password_confirmation &&
                                        "is-invalid"
                                      }`}
                                      name="password_confirmation"
                                      id="email1"
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
                                <div className="col-lg-12 mt-4">
                                  <div className="form-group">
                                    <label>Total *</label>
                                    <input
                                      type="password"
                                      className={`form-control style-border ${
                                        formik.touched.password_confirmation &&
                                        formik.errors.password_confirmation &&
                                        "is-invalid"
                                      }`}
                                      name="password_confirmation"
                                      id="email1"
                                      
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
                              <div className="w-25">
                              <SubmitBtn text="Next"  />

                              </div>

                            </form>
                          </div>
                        </div>
                      </div>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className=" col-12 col-lg-6 col-xl-6 saudia_map vh-100"></div> */}
            {/* <div className="col-6">
              <img src={img} alt="" width="100%" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OffsetDetails;
