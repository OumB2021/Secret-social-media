import React, { useState } from "react";
import reg from "../Assets/4274.jpg";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={reg} alt="login" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form
          action="/api/register"
          method="POST"
          className="max-w-[400px] w-full mx-auto p-12 px-8 bg-gray-200 rounded-lg"
        >
          <h2 className="text-4xl font-bold text-center dark:text-orange-900">
            REGISTER
          </h2>
          <div>
            <label className="p-2 flex flex-col py-2 text-lg focus:outline-none">
              Name
            </label>
            <input
              className="rounded-lg bg-slate-100 mb-2 p-4 w-full"
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2 flex flex-col py-2 text-lg focus:outline-none">
              Email
            </label>
            <input
              className="rounded-lg bg-slate-100 mb-2 p-4 w-full"
              type="text"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="p-2 flex flex-col py-2 text-lg focus:outline-none">
              Password
            </label>
            <input
              className="rounded-lg bg-slate-100 mb-2 p-4 w-full"
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="p-2 flex flex-col py-2 text-lg focus:outline-none">
              Confirm Password
            </label>
            <input
              className="rounded-lg bg-slate-100 mb-2 p-4 w-full"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full my-5 py-2 bg-blue-400 shadow-sm text-xl font-bold rounded-lg text-white"
            type="submit"
          >
            REGISTER
          </button>
          <div className="text-center text-lg font-normal">
            Already have an account ?{" "}
            <Link
              className="underline font-semibold hover:text-orange"
              to={"/login"}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
