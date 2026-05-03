import React, { useState } from "react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { GoPasskeyFill } from "react-icons/go";
import { BsApple, BsGoogle } from "react-icons/bs";
import { Link, replace, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import CoinbaseLogo from "@/assets/images/coinbase_logo.png";
import WarningBanner from "@/components/common/WarningBanner";
import { RiLoader5Line } from "react-icons/ri";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [apiError, setApiError] = useState("");
  const [displayPolicy, setDisplayPolicy] = useState(true);
  const [next, setNext] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setApiError("");
      try {
        await login(values.email, values.password);
        navigate("/account", { replace: true });
      } catch (err) {
        setApiError(err.message || "Invalid email or password.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const reset = () => {
    formik.resetForm();
    setNext(false);
  };

  return (
    <section className="lg:min-h-dvh h-dvh w-full bg-gray-950 overflow-y-auto p-4">
      <WarningBanner />
      <button
        className="size-11 cursor-pointer static  rounded-full lg:fixed top-12 left-9"
        onClick={() => {
          if (next) {
            reset();
          } else {
            navigate("/");
          }
        }}
      >
        <img src={CoinbaseLogo} className="brightness-0 size-10 invert clas" />
      </button>

      <div className="max-w-md lg:pt-36 p-5 h-full md:h-fit flex flex-col justify-evenly mx-auto">
        <div className="mb-5">
          <h4 className="text-white py-3 text-3xl font-medium">
            Sign in to Coinbase
          </h4>
          <p className="text-yellow-400 text-sm font-medium">
            Demo app – do not use your real password.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} noValidate>
          <div className="space-y-5">
            {!next && (
              <div>
                <Input
                  label="Email"
                  className="rounded-md text-white py-4"
                  variant="outline"
                  placeholder="Your Email Address"
                  fullWidth
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-red-400 text-sm">
                    {formik.errors.email}
                  </p>
                )}
              </div>
            )}

            {next && (
              <div className="space-y-5">
                <button
                  type="button"
                  onClick={() => setNext(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-md bg-transparent border border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="size-9 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="size-5 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-md font-medium">
                    {formik.values.email}
                  </span>
                </button>

                <div>
                  <Input
                    label="Password"
                    type="password"
                    className="rounded-md text-white py-4"
                    variant="outline"
                    placeholder="Your Password"
                    fullWidth
                    autoFocus
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-red-400 text-sm">
                      {formik.errors.password}
                    </p>
                  )}
                  <div className="mt-2">
                    <Link
                      to="/forgot-password"
                      className="text-blue-500 text-sm hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {apiError && (
              <p className="text-red-400 text-sm font-medium">{apiError}</p>
            )}

            {!next ? (
              <Button
                type="button"
                onClick={() => setNext(true)}
                className="w-full bg-[#2d4a8a] hover:bg-[#3558a8] text-white py-3 rounded-full"
                variant="secondary"
                disabled={!formik.values.email}
              >
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-[#2d4a8a] hover:bg-[#3558a8] text-white py-3 rounded-full"
                variant="secondary"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <RiLoader5Line size={25} className="animate-spin" />
                ) : (
                  "Continue"
                )}
              </Button>
            )}
          </div>

          {!next && (
            <>
              <div className="relative w-full py-8">
                <div className="w-full h-px bg-gray-700" />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 text-gray-600 text-sm px-2">
                  OR
                </p>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full py-4 px-7 flex items-center gap-2 font-medium rounded-full bg-slate-200/10 cursor-pointer hover:bg-gray-800 text-white justify-start"
                >
                  <GoPasskeyFill size={18} />
                  <p className="text-center w-full">Sign in with Passkey</p>
                </button>
                <button
                  type="button"
                  className="w-full py-4 px-7 flex items-center gap-2 font-medium rounded-full bg-slate-200/10 cursor-pointer hover:bg-gray-800 text-white justify-start"
                >
                  <BsGoogle size={18} />
                  <p className="text-center w-full">Sign in with Google</p>
                </button>
                <button
                  type="button"
                  className="w-full py-4 px-7 flex items-center gap-2 font-medium rounded-full bg-slate-200/10 cursor-pointer hover:bg-gray-800 text-white justify-start"
                >
                  <BsApple size={18} />
                  <p className="text-center w-full">Sign in with Apple</p>
                </button>
              </div>
            </>
          )}
          {!next && (
            <div className="mt-5">
              <p className="text-white font-medium text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          )}
        </form>
      </div>
      {!next && (
        <div className="lg:py-4 mx-auto">
          <p className="text-xs text-gray-500 text-center px-4">
            By creating an account you certify that you are over the age of 18
            and agree to our <span className="underline">Privacy Policy</span>{" "}
            and <span className="underline">Cookie Policy.</span>
          </p>
        </div>
      )}

      {displayPolicy && (
        <div className="hidden fixed bottom-0 w-full left-0 h-20 bg-gray-900 lg:flex items-center justify-center py-2">
          <div className="w-2xl flex justify-center gap-4 items-center">
            <p className="text-white text-sm">
              We use strictly necessary cookies to enable essential functions,
              such as security and authentication. For more information, see our
              <span className="text-blue-500 cursor-pointer">
                {" "}
                Cookie Policy
              </span>
              .
            </p>
            <Button onClick={() => setDisplayPolicy(false)}>Dismiss</Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Signin;
