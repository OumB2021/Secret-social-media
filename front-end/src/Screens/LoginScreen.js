import React, { useState } from "react";
import secret from "../Assets/secret.jpg";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={secret} alt="login" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto p-12 px-8 bg-red-100 rounded-lg">
          <h2 className="text-4xl font-bold text-center dark:text-orange-900">
            SIGN IN
          </h2>
          <div>
            <label className="p-2 flex flex-col py-2 text-lg focus:outline-none">
              Email
            </label>
            <input
              className="rounded-lg bg-slate-100 mb-2 p-4 w-full"
              type="text"
              placeholder="Enter email"
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
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full my-5 py-2 bg-red-400 shadow-sm text-xl font-bold rounded-lg text-white"
            type="submit"
          >
            SIGN IN
          </button>
          <div className="text-center text-lg font-normal">
            New Customer ?{" "}
            <Link
              className="underline font-semibold hover:text-orange"
              to={"/register"}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
