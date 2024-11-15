import Loginheader from "../../Auth/Loginheader";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { postData } from "../../../utils/fetchApi";
import { notifyError, notifySuccess } from "../../notifications/notify";
import { useNavigate } from "react-router-dom";

const Plant = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {},
  });

  const Post = useMutation(postData, {
    onSuccess: (e) => {
      notifySuccess("Otp has send ");
      // setKey(e?.data?.data.key);
      navigate("/otp", { state: { key: e?.data?.data.key } });
    },
    onError: ({ message }) => {
      notifyError(message);
    },
  });
  return (
    <>
      <Loginheader title="Plant" />

      <div className="offset space-top space-extra-bottom overflow-hidden pt-0  d-flex mt-5 ">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className=" col-12 col-lg-10 col-xl-7 ">
              <div className="donation-page-single ">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <div className="donation-form m-0  ">
                      <div className="row">
                        <div className="col-12 ">
                          <form
                            className="needs-validation"
                            onSubmit={formik.handleSubmit}
                          >
                            <div className="row mt-4">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Type *</label>
                                  <select
                                    className={`form-control style-border ${
                                      formik.touched.email &&
                                      formik.errors.email &&
                                      "is-invalid"
                                    }`}
                                    name="type"
                                    id="email1"
                                    {...formik.getFieldProps("type")}
                                  >
                                    <option disabled hidden>
                                      select Type
                                    </option>
                                    <option>General</option>
                                    <option>Region</option>
                                    <option>Project</option>
                                  </select>

                                  <div className="invalid-feedback">
                                    {formik.touched.type && formik.errors.type}
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label>Number Of Trees</label>
                                  <input
                                    type="number"
                                    className={`form-control style-border ${
                                      formik.touched.password &&
                                      formik.errors.password &&
                                      "is-invalid"
                                    }`}
                                    name="treesnumber"
                                    id="lname1"
                                    placeholder="Number Of Trees"
                                    {...formik.getFieldProps("treesnumber")}
                                  />
                                  <div className="invalid-feedback">
                                    {formik.touched.treesnumber &&
                                      formik.errors.treesnumber}
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
                                Plant
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

export default Plant;
