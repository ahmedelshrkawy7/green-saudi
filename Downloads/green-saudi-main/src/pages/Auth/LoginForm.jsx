import { useQuery, useMutation, useQueryClient } from "react-query";
import { getData, postData } from "../../utils/fetchApi";
import { Form, Formik } from "formik";
import BeneficiaryForm from "./BeneficiaryForm";
import PlanterForm from "./PlanterForm";
import SupplierForm from "./SupplierForm";
import { useState } from "react";
import * as Yup from "yup";
import { notifySuccess, notifyError } from "../notifications/notify";
import Otp from "./otp/Otp";
import { useNavigate } from "react-router-dom";
import Loginheader from "./Loginheader";

const LoginForm = () => {
  const [type, setType] = useState(0);
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery("users", () =>
    getData("/user/types")
  );
  let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
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
            <div className="col-lg-7 col-xl-8">
              <div className="donation-page-single">
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
                        Post.mutate(["/user/register", values]);
                      }}
                    >
                      <div className="donation-form ">
                        <div className="row">
                          <div className="col-12">
                            <ul
                              className="nav nav-pills"
                              // id="pills-tab"
                              // role="tablist"
                            >
                              {data?.types?.map((typ, id) => {
                                return (
                                  <li
                                    className="nav-item"
                                    role="presentation"
                                    key={typ.id}
                                  >
                                    <button
                                      className={`nav-link  ${
                                        type == id && "active"
                                      } `}
                                      // id="pills-home-tab"
                                      // data-bs-toggle="pill"
                                      // data-bs-target="#pills-home"
                                      // type="button"
                                      // role="tab"
                                      // aria-controls="pills-home"
                                      // aria-selected="true"
                                      onClick={() => {
                                        setType(id);
                                      }}
                                    >
                                      {typ.name}
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                            <Form className="needs-validation">
                              <div>
                                {type === 0 && (
                                  <BeneficiaryForm
                                    typeId={data?.types[type].id}
                                  />
                                )}
                                {type === 1 && (
                                  <PlanterForm typeId={data?.types[type].id} />
                                )}
                                {type === 2 && (
                                  <SupplierForm typeId={data?.types[type].id} />
                                )}
                              </div>

                              <div className="btn-wrap justify-content-between mt-20">
                                <button
                                  type="submit"
                                  className="btn style4"
                                  disabled={Post.isLoading}
                                >
                                  Register
                                </button>
                              </div>
                            </Form>
                          </div>
                        </div>
                      </div>
                    </Formik>
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

export default LoginForm;
