import { useQuery, useMutation, useQueryClient } from "react-query";
import { getData, postData } from "../../utils/fetchApi";
import { Form, Formik } from "formik";
import BeneficiaryForm from "./BeneficiaryForm";
import PlanterForm from "./PlanterForm";
import SupplierForm from "./SupplierForm";

const LoginForm = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery("users", () =>
    getData("/user/types")
  );

  const Post = useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
                        type_id: 2,
                      }}
                      onSubmit={(values) => {
                        Post.mutate(values);
                      }}
                    >
                      <div className="donation-form ">
                        <div className="row">
                          <div className="col-12">
                            <ul
                              className="nav nav-pills"
                              id="pills-tab"
                              role="tablist"
                            >
                              {/* {data.types.map((type) => {
                                return (
                                  <li
                                    className="nav-item"
                                    role="presentation"
                                    key={type.id}
                                  >
                                    <button
                                      className="nav-link active"
                                      id="pills-home-tab"
                                      data-bs-toggle="pill"
                                      data-bs-target="#pills-home"
                                      type="button"
                                      role="tab"
                                      aria-controls="pills-home"
                                      aria-selected="true"
                                    >
                                      {type.name}
                                    </button>
                                  </li>
                                );
                              })} */}
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link active"
                                  id="pills-home-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-home"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-home"
                                  aria-selected="true"
                                >
                                  Benefeciary
                                </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="pills-profile-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-profile"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-profile"
                                  aria-selected="false"
                                >
                                  Planter
                                </button>
                              </li>

                              <li className="nav-item" role="presentation">
                                <button
                                  className="nav-link"
                                  id="pills-paypal-tab"
                                  data-bs-toggle="pill"
                                  data-bs-target="#pills-paypal"
                                  type="button"
                                  role="tab"
                                  aria-controls="pills-paypal"
                                  aria-selected="false"
                                >
                                  {" "}
                                  Supplier
                                </button>
                              </li>
                            </ul>
                            <Form>
                              <div
                                className="tab-content"
                                id="pills-tabContent"
                              >
                                <BeneficiaryForm />
                                <PlanterForm />
                                <SupplierForm />
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
