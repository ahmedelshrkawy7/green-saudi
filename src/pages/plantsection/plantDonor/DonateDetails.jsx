import { useQuery, useMutation, useQueryClient } from "react-query";
import { Form, Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getData, postData } from "../../../utils/fetchApi";
import { notifyError, notifySuccess } from "../../notifications/notify";
import Loginheader from "../../Auth/Loginheader";
import SubmitBtn from "../../../components/SubmitBtn";
import "./DonateDetails.css";

const DonateDetails = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery("users", () =>
    getData("/user/types")
  );
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },

    onSubmit: (values) => {
      Post.mutate(["/user/login", values]);
      navigate("/auth/login");
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
      <Loginheader title="donate-details" />
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
                        <form onSubmit={formik.handleSubmit}>
                          <div className="widget widget_categories ">
                            <h3 className="widget_title">
                              Please Checkout details of payment
                            </h3>
                            <ul className="d-flex flex-column total">
                              <li className="d-flex justify-content-between w-100 ">
                                <a href="blog.html">Number Of Trees</a>
                                <p>
                                  500 <span>Tree</span>
                                </p>
                              </li>
                              <li className="d-flex justify-content-between w-100">
                                <a href="blog.html">Total Of Tress Cost</a>
                                <p>
                                  500 <span>SAR</span>
                                </p>
                              </li>
                              <li className="d-flex justify-content-between w-100">
                                <a href="blog.html">VAT </a>
                                <p>
                                  500 <span>SAR</span>
                                </p>
                              </li>
                              <li className="d-flex justify-content-between w-100">
                                <a href="blog.html">Total Amount </a>
                                <p>
                                  500 <span>SAR</span>
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="d-flex justify-content-between cashWay w-100 align-items-center">
                            <div>
                              <img
                                src="https://tge.sa/images/viza.png"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                src="https://tge.sa/images/mastercard.png
                                "
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                src="https://tge.sa/images/1200px-Mada_Logo.svg.png"
                                alt=""
                              />
                            </div>
                          </div>

                          <SubmitBtn text="PAY SAR" />
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
  );
};

export default DonateDetails;
