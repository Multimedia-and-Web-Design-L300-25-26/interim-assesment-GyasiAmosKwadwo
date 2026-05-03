import React, { useState } from "react";
import { BsApple, BsGoogle } from "react-icons/bs";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import { useAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import WarningBanner from "@/components/common/WarningBanner";
import CoinbaseLogo from "@/assets/images/coinbase_logo.png";
import { RiLoader5Line } from "react-icons/ri";

const emailSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),
});

const passwordSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain uppercase letter")
    .matches(/[a-z]/, "Must contain lowercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[^A-Za-z0-9]/, "Must contain a symbol")
    .required("Password is required"),
});

const nameSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
});

const fullSchema = emailSchema.concat(passwordSchema).concat(nameSchema);

const passwordRules = [
  { label: "A minimum of 8 characters", test: (v) => v.length >= 8 },
  {
    label: "Uppercase and lowercase letters",
    test: (v) => /[A-Z]/.test(v) && /[a-z]/.test(v),
  },
  { label: "At least 1 number", test: (v) => /[0-9]/.test(v) },
  { label: "At least 1 symbol", test: (v) => /[^A-Za-z0-9]/.test(v) },
];

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [apiError, setApiError] = useState("");
  const [displayPolicy, setDisplayPolicy] = useState(true);
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", firstName: "", lastName: "" },
    validationSchema: fullSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { setSubmitting }) => {
      setApiError("");
      try {
        const fullName = `${values.firstName} ${values.lastName}`;
        await register(fullName, values.email, values.password);
        navigate("/signin", { replace: true });
      } catch (err) {
        setApiError(err.message || "Registration failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleBack = () => {
    if (step === 1) {
      navigate("/");
    } else {
      setStep((s) => s - 1);
    }
  };

  const handleStep1Continue = async () => {
    const errors = await formik.validateForm();
    await formik.setFieldTouched("email", true);
    if (!errors.email) setStep(2);
  };

  const handleStep2Continue = async () => {
    const errors = await formik.validateForm();
    await formik.setFieldTouched("password", true);
    if (!errors.password) setStep(3);
  };

  const password = formik.values.password;

  return (
    <section className="lg:min-h-dvh h-dvh w-full bg-gray-950 overflow-y-auto p-4">
      <WarningBanner />
      <button
        className="size-11 cursor-pointer static rounded-full lg:fixed top-12 left-9"
        onClick={handleBack}
      >
        <img src={CoinbaseLogo} className="brightness-0 size-10 invert" />
      </button>

      <div className="max-w-md lg:pt-36 p-5 h-full md:h-fit flex flex-col justify-evenly mx-auto">
        {/* ── Step 1: Email ── */}
        {step === 1 && (
          <>
            <div className="mb-5">
              <h4 className="text-white py-3 text-3xl font-medium">
                Create your account
              </h4>
              <p className="text-gray-400">
                Access all that Coinbase has to offer with a single account.
              </p>
              <p className="text-yellow-400 text-sm font-medium mt-2">
                Demo app – do not use your real password.
              </p>
            </div>

            <div className="space-y-5">
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

              <Button
                type="button"
                className="w-full bg-blue-500 hover:bg-blue-600 text-gray-900 py-3"
                variant="secondary"
                onClick={handleStep1Continue}
                disabled={!formik.values.email}
              >
                Continue
              </Button>
            </div>

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
                <BsApple size={18} />
                <p className="text-center w-full">Sign up with Apple</p>
              </button>
              <button
                type="button"
                className="w-full py-4 px-7 flex items-center gap-2 font-medium rounded-full bg-slate-200/10 cursor-pointer hover:bg-gray-800 text-white justify-start"
              >
                <BsGoogle size={18} />
                <p className="text-center w-full">Sign up with Google</p>
              </button>
            </div>

            <div className="mt-5">
              <p className="text-white font-medium text-center">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-500">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="lg:py-4 mx-auto mt-4">
              <p className="text-xs text-gray-500 text-center px-4">
                By creating an account you certify that you are over the age of
                18 and agree to our{" "}
                <span className="underline">Privacy Policy</span> and{" "}
                <span className="underline">Cookie Policy.</span>
              </p>
            </div>
          </>
        )}

        {/* ── Step 2: Password ── */}
        {step === 2 && (
          <>
            <div className="mb-5">
              <h4 className="text-white py-3 text-3xl font-medium">
                Create a password
              </h4>
              <p className="text-gray-400">
                Protect your account by creating a strong password.
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} noValidate>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full bg-transparent border border-gray-700 focus:border-blue-500 rounded-md px-4 py-4 text-white placeholder-gray-500 focus:outline-none pr-12"
                      {...formik.getFieldProps("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                    >
                      {showPassword ? (
                        <HiEyeOff size={20} />
                      ) : (
                        <HiEye size={20} />
                      )}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-red-400 text-sm">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <ul className="space-y-2">
                  {passwordRules.map((rule) => {
                    const passed = rule.test(password);
                    return (
                      <li key={rule.label} className="flex items-center gap-2">
                        {passed ? (
                          <BsCheckCircleFill
                            size={18}
                            className="text-blue-500 flex-shrink-0"
                          />
                        ) : (
                          <BsCircle
                            size={18}
                            className="text-gray-600 flex-shrink-0"
                          />
                        )}
                        <span
                          className={
                            passed
                              ? "text-gray-300 text-sm"
                              : "text-gray-500 text-sm"
                          }
                        >
                          {rule.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Button
                  type="button"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-gray-900 py-3"
                  variant="secondary"
                  onClick={handleStep2Continue}
                  disabled={!passwordRules.every((r) => r.test(password))}
                >
                  Continue
                </Button>
              </div>
            </form>
          </>
        )}

        {/* ── Step 3: Name ── */}
        {step === 3 && (
          <>
            <div className="mb-5">
              <h4 className="text-white py-3 text-3xl font-medium">
                What should we call you?
              </h4>
              <p className="text-gray-400">
                Enter your first and last name. You can make changes later on by
                verifying your account.
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} noValidate>
              <div className="space-y-5">
                <div>
                  <Input
                    label="First name"
                    className="rounded-md text-white py-4"
                    variant="outline"
                    placeholder="Your first name"
                    fullWidth
                    autoFocus
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="mt-1 text-red-400 text-sm">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    label="Last name"
                    className="rounded-md text-white py-4"
                    variant="outline"
                    placeholder="Your last name"
                    fullWidth
                    {...formik.getFieldProps("lastName")}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="mt-1 text-red-400 text-sm">
                      {formik.errors.lastName}
                    </p>
                  )}
                </div>

                {apiError && (
                  <p className="text-red-400 text-sm font-medium">{apiError}</p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-gray-900 py-3"
                  variant="secondary"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <RiLoader5Line size={25} className="animate-spin" />
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>

      {displayPolicy && (
        <div className="hidden fixed bottom-0 w-full h-20 bg-gray-900 lg:flex items-center justify-center py-2">
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

export default Signup;
