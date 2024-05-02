import { useEffect, useRef } from "react";
import "./Otp.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { postData } from "../../../utils/fetchApi";
import { notifyError, notifySuccess } from "../../notifications/notify";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../Nav";
import Loginheader from "../Loginheader";

const Otp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    input0: Yup.string().required("Required"),
    input1: Yup.string().required("Required"),
    input2: Yup.string().required("Required"),
    input3: Yup.string().required("Required"),
    input4: Yup.string().required("Required"),
  });
  const Post = useMutation(postData, {
    onSuccess: ({ data: { message } }) => {
      // queryClient.invalidateQueries("users");
      notifySuccess(message);
      if (state.key) {
        navigate("/");
      } else if (state.email) {
        navigate("/auth/reset");
      }
    },
    onError: () => {
      notifyError("wrong otp");
    },
  });
  const formik = useFormik({
    initialValues: {
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let otp = "";
      Object.keys(values).forEach((el) => {
        otp = otp + values[el];
      });

      if (state.key) {
        Post.mutate(["/user/validate", { otp, ...state }]);
      } else if (state.email) {
        Post.mutate(["/user/password/verify", { otp, ...state }]);
      }
    },
  });
  // console.log(formik.values);
  // console.log(formik.errors);

  const inputRefs = useRef([]);
  const submitBtn = useRef(null);
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);
  // useEffect(() => {
  //   if (Object.keys(formik.errors).length === 0) {
  //     submitBtn.current.click();
  //   }
  // }, [formik.errors]);

  const handleKeyDown = (event, index) => {
    console.log("🚀 ~ handleKeyDown ~ index:", index);
    if (event.key === "Backspace" || event.target.value === "") {
      if (index > 0) {
        inputRefs.current[index].value = "";
        inputRefs.current[index - 1].focus();
      }
    } else {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <>
      <Loginheader />

      <div className=" mt-5 d-flex justify-content-center align-items-center otp_main">
        <div className="position-relative">
          <div className="card p-2 text-center">
            <h6>Please enter the one time password </h6>
            <div>
              <span>A code has been sent to</span> <small>{state.email}</small>
            </div>

            <form
              className="otp-form inputs d-flex flex-row justify-content-center mt-2"
              onSubmit={formik.handleSubmit}
            >
              {[...Array(5)].map((_, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    name={`input${index}`}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    maxLength={1}
                    onKeyDown={(e) => {
                      handleKeyDown(e, index);
                    }}
                    className="form-control otp-input mx-2"
                    style={{
                      border: "1px solid var(--saudi-green)",
                      width: "60px  ",
                      padding: "1rem",
                    }}
                    onChange={formik.handleChange}
                  />
                );
              })}
              <input type="submit" ref={submitBtn} hidden />
            </form>
            <div>
              <p className="m-0">Didn't received OTP ?</p>
              <p>Resend OTP </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => submitBtn.current.click()}
                className="btn px-4 validate"
                disabled={Post.isLoading}
              >
                Validate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
