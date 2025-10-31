import React, { useContext } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const imageURL = form.photoURL.value;
    const password = form.password.value;
    try {
      // Step 1: Create the user
      const newUser = await createUser(email, password);
      console.log("✅ User created:", newUser);
      // Step 2: Update profile info
      await updateUserProfile({
        displayName: userName,
        photoURL: imageURL,
      });
      console.log("✅ Profile updated successfully");
      const dbUser = {
        displayName: newUser.displayName,
        email: newUser.email,
        password: newUser.password,
      };
      //Create User in Database
      const dbUserPromise = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(dbUser),
      });
      const result = await dbUserPromise;
      console.log(result);
      // Step 3: Reset form or redirect
      //form.reset();
      // e.g., navigate("/dashboard");
    } catch (error) {
      console.error("❌ Registration failed:", error.message);
      // Optionally, show an error message in UI
    }
  };

  return (
    <section className="flex items-center justify-center">
      <div className="my-10 w-md rounded-md bg-white p-10 shadow-md">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-3xl font-semibold">Register Now!</h2>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-gradient">
              Login Now
            </Link>
          </p>
        </div>
        <form action="" onSubmit={handleRegistration}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Name</legend>
            <input
              type="name"
              className="input w-full"
              placeholder="Mariam Swarna"
              name="name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Email</legend>
            <input
              type="email"
              className="input w-full"
              placeholder="smsowkothasan@gmail.com"
              name="email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm">Image URL</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="https://example.com/image.jpg"
              name="photoURL"
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
          </fieldset>
          <button type="submit" className="btn btn-gradient btn-block">
            Register
          </button>
        </form>
        <div className="divider font-semibold text-gray-600 before:h-px before:bg-gray-300 after:h-px after:bg-gray-300">
          OR
        </div>
        <button type="button" className="btn btn-block bg-white">
          <FcGoogle size={20} /> Sign Up With Google
        </button>
      </div>
    </section>
  );
};

export default Register;
