import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const Navigation = () => {
  const {userState} = useContext(UserContext);
  console.log('Navigation userData:',userState)
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic to handle user logout
    // userContext.setAuthenticated(false);
    // userContext.setCurrentUser(null);
    navigate('/');
  };

  return (
    <>
      <nav
        id="header"
        className="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-blue-500 to-purple-500"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link to="/" className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex">
              <div className="mr-4">
                <img src="https://cdn-icons-png.flaticon.com/512/45/45552.png" alt="" className="h-10 w-10" />
                
              </div>
              The F Word
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {userState?.name ? (
            <>
              <li className="mr-3">
                <span>Welcome, {userState?.name}!</span>
              </li>
              <li className="mr-3">
                <button onClick={handleLogout} className="inline-block py-2 px-4 text-white font-bold no-underline">
                  Log Out
                </button>
              </li>
            </>
              ) : (
                <>
                  <li className="mr-3">
                   <Link to="/register" className="inline-block py-2 px-4 text-white font-bold no-underline">
                      Register
                    </Link>
                  </li>
                  <li className="mr-3">
                    <Link to="/contact" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">
                      Contact Us
                    </Link>
                  </li>
                  <li className="mr-3">
                    <Link to="/" className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">
                      Jobs
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <button
              id="navAction"
              className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              {userState?.name ? 'Log Out' : <Link to="/signin">'Sign In'</Link>}
            </button>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    </>
  );
}
export default Navigation;