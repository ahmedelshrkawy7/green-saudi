import { useFormik } from "formik";
import React from "react";
import Loginheader from "../../Auth/Loginheader";
import "./OffsetStatistics.css";
import SubmitBtn from "../../../components/SubmitBtn";
import { useNavigate } from "react-router-dom";

const OffsetStatistics = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {},
  });
  return (
    <>
      <Loginheader title="Amounts In Metric Ton" />

      <div className="offset space-top space-extra-bottom overflow-hidden pt-0  d-flex mt-5 ">
        <div className="container">
          <div className="row gx-40 justify-content-center ">
            <div className=" col-12 col-lg-10 col-xl-10 ">
              <div className="donation-page-single ">
                <div className="project-page-single">
                  <div className="page-content justify-content-center">
                    <div className="donation-form m-0  ">
                      <div className="row offset_details justify-content-between">
                        <div className="col-4 ">
                          <h2> Amounts In Metric Ton </h2>
                          <div className=" d-flex justify-content-between align-items-center">
                            <h2>Power</h2>
                            <p>0.10</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>Water</h2>
                            <p>0.10</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>Fuel</h2>
                            <p>0.10</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>Gas</h2>
                            <p>0.10</p>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <h2>Coal</h2>
                            <p>0.10</p>
                          </div>
                          <div className="row">
                          <div className="col-6" onClick={()=>{navigate(-1)}}>
                            <SubmitBtn text="Recalculate" />
                          </div>
                          
                          <div className="col-6" onClick={()=>{navigate('/offsetdetails')}}>
                          <SubmitBtn text="Offset Now" />
                          </div>
                          <div className="col-6" onClick={()=>{navigate('/')}}>
                          <SubmitBtn text="Plant" />
                          </div>

                        </div>
                        </div>
                        <div className="col-4 ">
                          <h2>Results</h2>
                          <div>
                            <p>Results</p>
                            <h4>.02</h4>
                          </div>
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

export default OffsetStatistics;
