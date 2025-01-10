import Lottie from 'react-lottie';
import loginLottieData from '../../assets/Animation - 1733900703492.json'
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    useEffect(()=> {
        loadCaptchaEnginge(6); 
    },[])

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const handleValidateCaptcha = () =>{
    const user_captcha_value = captchaRef.current.value;
    if(validateCaptcha(user_captcha_value)){
        setDisabled(false);
    }
    else{
        setDisabled(true);
    }
  }


  return (
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
          <h2 className="text-center text-2xl font-bold text-blue-600">Sign In</h2>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-blue-800 font-medium">Email</span>
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
              <span className="label-text text-blue-800 font-medium">Password</span>
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
              ref={captchaRef}
              name="captcha"
              placeholder="Type the captcha above"
              className="input input-bordered border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          <button onClick={handleValidateCaptcha} className="btn btn-xs mt-2">Validate</button>
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
            <Link href="#" className="link link-hover text-blue-800 font-semibold">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
