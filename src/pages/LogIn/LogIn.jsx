import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../navbar/Navbar";
 
const LogIn = () => {
  const [errorMsg,setErrorMsg]=useState('');
  const location=useLocation();
  console.log(location)
  const navigate=useNavigate()
   const {signIn}=useContext(AuthContext);
   const handleLogin=e=>{
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value;
    signIn(email,password)
    .then(result=>{
      console.log(result.user)
     
      navigate(location?.state?`${location.state}` :'/');
     
      
    })
    .catch(err=>{
      setErrorMsg('Your Information Is incorrect.!!!!! please try again')
    })
   }
  return (
    
      <div className=" min-h-screen">
     
        <Navbar></Navbar>
        <h1 className="text-5xl font-bold text-center pt-5">Login now!</h1>
        <form onSubmit={handleLogin} className="w-1/2  mx-auto pt-7 bg-base-200 p-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
            {
              errorMsg&&<h2 className="text-red-700 text-center">{errorMsg}</h2>
            }
       
          </div>
        </form>
        <p className="text-center mt-3">Don't have an account ? please <Link to="/register" className="text-blue-500 font-bold">Register</Link></p>
      </div>
    
  );
};

export default LogIn;
