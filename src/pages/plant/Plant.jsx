import Loginheader from "../Auth/Loginheader";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { postData } from "../../utils/fetchApi";
import { notifyError, notifySuccess } from "../notifications/notify";
import { useNavigate } from "react-router-dom";

const Plant = () => {
  const navigate = useNavigate();
  const formik = useFormik();

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
            <div className=" col-12 col-lg-10 col-xl-10 ">
              <div className="donation-page-single ">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <div className="donation-form m-0  ">
                      <div className="row">
                        <div className="col-12 ">
                          <form
                            onSubmit={formik.handleSubmit}
                            className="w-100"
                          ></form>
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
