import React, { useState } from "react";
import Loginheader from "../Auth/Loginheader";
import { Formik, useFormik } from "formik";
import { useMutation, useQuery } from "react-query";
import { getData, postData } from "../../utils/fetchApi";
import "./Offset.css";
import img from "../../assets/img/offset/greenMap.jpg";
import { BsPerson } from "react-icons/bs";
import { TbBuildingFactory } from "react-icons/tb";
import SubmitBtn from "../../components/SubmitBtn";
import Factory from "./offset-types/Factory";
import Individual from "./offset-types/Individual";
import SME from "./offset-types/SME";
const Offset = () => {
  const [type, setType] = useState(0);
  const validationSchema = {};
  const Post = useMutation(postData);
  const { isLoading, error, data } = useQuery("users", () =>
    getData("/user/types")
  );

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return (
    <>
      <Loginheader title="OFFSET NOW" />

      <div className="offset space-top space-extra-bottom overflow-hidden pt-0  d-flex mt-5 ">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className=" col-12 col-lg-10 col-xl-10 ">
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
                        Post.mutate(["/user/register", values]);
                      }}
                    >
                      <div className="donation-form m-0  ">
                        <div className="row">
                          <div className="col-12 ">
                            <ul
                              className="nav nav-pills justify-content-between mb-5"
                              // id="pills-tab"
                              // role="tablist"
                            >
                              {[
                                {
                                  name: "individual",
                                  icon: <BsPerson size={32} />,
                                },
                                {
                                  name: " SME",
                                  icon: <TbBuildingFactory size={32} />,
                                },
                                {
                                  name: "Factories or special projects",
                                  icon: <TbBuildingFactory size={32} />,
                                },
                              ].map((typ, id) => {
                                return (
                                  <li
                                    className="nav-item d-flex align-items-center gap-3"
                                    role="presentation"
                                    key={typ.id}
                                  >
                                    {typ.icon}
                                    <button
                                      className={`nav-link mt-2  ${
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
                            <form
                              onSubmit={formik.handleSubmit}
                              className="w-100"
                            >
                              {type == 0 && <Individual />}
                              {type == 1 && <SME />}
                              {type == 2 && <Factory />}
                              <SubmitBtn text="Next" />
                            </form>
                            {/* <Form className="needs-validation">
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
                            </Form> */}
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

export default Offset;
