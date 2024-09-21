import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebaseConfig"; 
import { Link, useNavigate } from 'react-router-dom'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate('/'); 
      }, 2000); 
      console.log(userCredential.user);
    } catch (error) {
      toast.error(error.message);
    }
  };  

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3">Sign up</h3>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form onSubmit={handleSignUp}>
          <div className="flex flex-col gap-4 mt-7">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl"
              required
            />
          </div>
          <button
            type="submit"
            className="btn_dark_rounded my-5 w-full !rounded-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-black font-bold">
          Already have an account?{" "}
          <Link to="/logout">
            <span className="text-secondary underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
