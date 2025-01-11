
import Lottie from "react-lottie";
import loginLottieData from "../../assets/Animation - 1733900703492.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, {replace: true}); 
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="card bg-blue-50 w-full max-w-4xl mx-auto mt-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Animation Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-48 md:w-64">
            <Lottie options={loginLottieData} height={200} width={200} />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <form onSubmit={handleLogin} className="space-y-4">
            <h2 className="text-center text-2xl font-bold text-blue-600">
              Sign In
            </h2>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            {/* Captcha */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                onBlur={handleValidateCaptcha}
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                disabled={disabled}
                className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
              >
                Login
              </button>
            </div>

            <p className="text-center text-sm text-blue-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="link link-hover text-blue-800 font-semibold"
              >
                SignUp
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
