
import Lottie from "react-lottie";
import sinUpLottieData from "../../assets/Animation - 1733900703492.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider"; // Correct import

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext); // Correct usage

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="card bg-blue-50 w-full max-w-4xl mx-auto mt-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Animation Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-48 md:w-64">
            <Lottie options={sinUpLottieData} height={200} width={200} />
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-center text-2xl font-bold text-blue-600">
              Sign Up
            </h2>
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.name && (
                <span className="text-red-500 my-2">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.email && (
                <span className="text-red-500 my-2">Email is required</span>
              )}
            </div>

            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800 font-medium">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]/,
                })}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 my-2">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 my-2">Password must be at least 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 my-2">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 my-2">
                  Password must include uppercase, lowercase, number, and special characters.
                </p>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary bg-blue-600 border-none hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center text-sm text-blue-600">
              Already have an account?{" "}
              <Link
                to="/login"
                href="#"
                className="link link-hover text-blue-800 font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
