import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
const Register = () => {
  const Navigate=useNavigate();
    const {createUser}= useContext(AuthContext);
    const handleRegister=e=>{
       e.preventDefault();
       const form= new FormData(e.currentTarget);
       const email=form.get('email');
       const password= form.get('password');
       createUser(email,password)
       .then(result=>{
        console.log(result.user)
        Navigate('/')
       })
       .catch(err=>console.log(err))
    }

    return (
        <div className="bg-base-200 min-h-screen">
        <h1 className="text-5xl font-bold text-center pt-5">Register to your account</h1>
        <form onSubmit={handleRegister} className="w-1/2  mx-auto pt-7">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-3">Already  have an account ? please <Link to="/login" className="text-blue-500 font-bold">Login</Link></p>
      </div>
    );
};

export default Register;