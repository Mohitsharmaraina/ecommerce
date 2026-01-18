import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentState, setCurrentState] = useState("login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "signUp") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        console.log(response);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token === "") {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 "
      onSubmit={handleSubmit}
    >
      {/* title */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "signUp" ? (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="NAME"
        />
      ) : (
        ""
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="EMAIL"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="PASSWORD"
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === "login" ? (
          <>
            <p className="cursor-pointer">Forgot your password?</p>
            <p
              onClick={() => setCurrentState("signUp")}
              className="cursor-pointer"
            >
              Create Account
            </p>
          </>
        ) : (
          <p
            onClick={() => setCurrentState("login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
