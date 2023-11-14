import { UserContext } from './pages/registrationForm';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRecipes from "./pages/mainRecipes";
import App from './App';
import Navigation from './components/navigation';
import Meal from './pages/meal';
import NewsLetter from './pages/newsLetter';
import RegistrationForm from './pages/registrationForm';
import SignIn from './components/signin';


export default function routes() {
  const [users, setUsers] = useState([]); 


  return (
    <UserContext.Provider value={{ users, setUsers }}>
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
    
        <Route path='/' element={<App />}/>
        <Route path="/main-recipes" element={<MainRecipes />} />
        <Route path="/meal" element={<Meal />}/>
        <Route path="/newsLetter" element={<NewsLetter />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
      
      </BrowserRouter>
     </>
     </UserContext.Provider>
  )
}
