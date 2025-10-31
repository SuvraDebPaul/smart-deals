import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleUserSignin = async (e) => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const loggedUser = await signInUser(email, password);
      if (loggedUser) {
        setUser(loggedUser);
        navigate(form, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const loggedUser = await signInWithGoogle();
      if (loggedUser) {
        setUser(loggedUser);
        const newUser = {
          displayName: loggedUser.displayName,
          email: loggedUser.email,
          password: loggedUser.password,
        };
        const dbUserPromise = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const result = await dbUserPromise;
        console.log(result);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="my-16 w-md rounded-md bg-white p-10 shadow-md">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-3xl font-semibold">Login</h2>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-gradient">
              Register Now
            </Link>
          </p>
        </div>
        <form onSubmit={handleUserSignin}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="smsowkothasan@gmail.com"
              name="email"
            />
          </fieldset>
          <fieldset className="fieldset mb-6">
            <legend className="fieldset-legend text-sm">Password</legend>
            <input
              type="password"
              className="input w-full"
              placeholder="**********"
              name="password"
            />
            <Link className="label">Forget Password</Link>
          </fieldset>
          <button type="submit" className="btn btn-gradient btn-block">
            Sign In
          </button>
        </form>
        <div className="divider font-semibold text-gray-600 before:h-px before:bg-gray-300 after:h-px after:bg-gray-300">
          OR
        </div>
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-block bg-white"
        >
          <FcGoogle size={20} /> Sign In With Google
        </button>
      </div>
    </section>
  );
};

export default Login;
