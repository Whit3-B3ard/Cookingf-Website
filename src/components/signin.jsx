import React from "react";
import { useState,useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";

function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  //userContext= useContext(userContext)

  const handleSignIn = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    console.log(body);

    const usersString = localStorage.getItem("user");
    console.log("user:", usersString);

    if (usersString) {
      const users = JSON.parse(usersString);
      console.log("uses:", users);
     if (users.email == body.email && users.password== body.password)   
      if (rememberMe) {
        const currentUser = users.name;
        setRememberMe(!rememberMe);
        navigate("/");
      } else console.log("check 'Remember Me'or Incorrect email or password");
    } else {
      console.log("User not found");
    }

  };

  return (
    <form onSubmit={handleSignIn}>
      <div className="w-full h-2/4 bg-black flex">
        <div className="flex justify-start flex-1">
          <img
            src="https://www.markwellfoods.com.au/wp-content/uploads/2022/07/shutterstock_1345559753-scaled.jpg"
            className="h-full"
            alt=""
          />
        </div>
        <div className="flex justify-end flex-1">
          <img
            src="https://info.ehl.edu/hubfs/Brand_Experience_Header.jpg"
            className="h-full"
            alt=""
          />
        </div>
      </div>
      <main className="absolute w-1/4 h-3/5 top-52 left-1/2 transform -translate-x-1/2 bg-slate-800 rounded-3xl shadow-lg flex flex-col text-white">
        <div className="flex h-1/3 flex-col items-center">
          <h1 className="mt-8 text-2xl font-bold">Sign In</h1>
          <div className="mt-8 flex flex-wrap gap-8 text-4xl">
            <i className="fa-brands fa-facebook fa-bounce text-blue-600 cursor-pointer"></i>
            <i className="fa-brands fa-apple fa-bounce text-blue-900 cursor-pointer"></i>
            <i className="fa-brands fa-google fa-bounce text-red-600 cursor-pointer"></i>
          </div>
        </div>
        <div className="flex h-1/3 flex-col items-center">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-gray-400 text-black w-3/4 h-10 rounded pl-4 focus:border-pink-500 outline-none"
            //onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"

            className="border  text-black border-gray-400 w-3/4 h-10 rounded mt-8 pl-4 focus:border-pink-500 outline-none"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}

          />
          <div className="flex mt-8 gap-4 items-center">
            <div className="check">
              <input
                id="check-5"
                type="checkbox"
                className=""
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="check-5" className="check-label"></label>
            </div>
            <h1 className="text-1.2rem mb-2">Remember Me</h1>
          </div>
        </div>
        <div className="flex flex-col h-1/3 items-center justify-center">
          <button className="sign-in-button mt-4 h-8 w-1/2 rounded-2xl bg-red-500 w-90 text text-white">
            Sign-in
          </button>
          <div className="divider flex items-center mt-2">
            <div className="w-24 h-1 bg-gray mx-2"></div>
            <h1 className="to-register text-gray">
              Don't have an account yet ?
            </h1>
            <div className="w-24 h-1 bg-gray mx-2"></div>
          </div>
          <button
            className="sign-up-button bg-red-500 mt-4 mb-8 h-8 w-1/2 text text-white rounded-2xl"
            type="submit"
          >
            {" "}
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </main>
    </form>
  );
}

export default SignIn;
/**
 * 
 *   const user = users.find(
        (item) => item.email == body.email && item.password == body.password
      )
 */