import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registrationForm.css'
import { UserContext } from '../context/UserContext';

const RegistrationForm = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    logMeIn: false,
  });

  const {setUserState} = useContext(UserContext);
// console.log('context is', setUserState)

  const handleInputChange = (e) => {    
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault()
    const newUser = { ...formData };

    localStorage.setItem('user', JSON.stringify(newUser))

    setUserState({...newUser})

    if (formData.logMeIn) navigate('/')

    // userContext.setUsers([...userContext.users, newUser]);
    // userContext.setAuthenticated(true);
    // userContext.setCurrentUser(newUser);
    // setFormData({
    //   name: '',
    //   email: '',
    //   password: '',
    //   logMeIn: false,
    // });

    // console.log(newUser);
  };

  return (
    <div>
      
      <div className="w-full h-2/4 bg-black flex">
    <div className='flex justify-start flex-1'>
      <img src="https://www.markwellfoods.com.au/wp-content/uploads/2022/07/shutterstock_1345559753-scaled.jpg" className="h-full" alt="" />
    </div>
    <div className='flex justify-end flex-1'>
      <img src="https://info.ehl.edu/hubfs/Brand_Experience_Header.jpg" className="h-full" alt="" />
    </div>
  </div>
  <div className="w-full h-screen flex flex-col items-center absolute top-64">
    <div className='main flex w-4/12 h-3/4 bg-white rounded-xl'>
  
  <div className="w-full h-full rounded-xl flex flex-col items-center bg-gradient-to-r from-teal-600 via-zinc-700 to-teal-600 ">
    <h2 className="text-2xl font-bold mt-16 mb-8 text-white">Register for the Food Recipes Website</h2>
    <h3 className="text-lg mb-4 text-white">Register with:</h3>
    <div className="media">
      <i className="fa-brands fa-facebook fa-bounce text-blue-600 cursor-pointer mr-8 text-3xl"></i>
      <i className="fa-brands fa-apple fa-bounce text-blue-900 cursor-pointer mr-8 text-3xl"></i>
      <i className="fa-brands fa-google fa-bounce text-red-600 cursor-pointer text-3xl"></i>
    </div>
   <form className="mt-4 w-4/5 flex items-center flex-col">
      <div className="mb-4 w-full ml-16">
        <label className="block text-white">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus:border-pink-500 outline-none rounded"
        />
      </div>
      <div className="mb-4 w-full ml-16">
        <label className="block text-white">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus:border-pink-500 outline-none rounded"
        />
      </div>
      <div className="mb-4 w-full ml-16">
        <label className="block text-white">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus-border-pink-500 outline-none rounded"
        />
      </div>
      <h1 className='font-bold text-white'>Log Me In</h1>
      <div className="checkbox-wrapper-5">
      <div className="check mb-4">
        <input
          type="checkbox"
          id='check-5'
          name="logMeIn"
          checked={formData.logMeIn}
          onChange={handleInputChange}
          
        />
        <label for="check-5" className="block font-bold"></label>
      </div>
      </div>
      <div className="mb-4 w-full flex flex-col relative left-12">
        <Link to='/'>
        <button
          type="button"
          onClick={handleRegistration}
          className="sign-in-button bg-gradient-to-r from-slate-800  to-indigo-500 w-2/4 h-10 rounded-3xl relative left-20 text-white font-bold"
        >
          Register
        </button>
        </Link>
      </div>
    </form>
  </div>
</div>
</div>
    </div>
  );
};

export default RegistrationForm;
export {UserContext};