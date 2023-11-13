
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRecipes from "./pages/mainRecipes";
import App from './App';
import Navigation from './components/navigation';
import Meal from './pages/meal';
import NewsLetter from './pages/newsLetter';
import SignIn from './components/signin';

export default function routes() {
   
  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
    
        <Route path='/' element={<App />}/>
        <Route path="/main-recipes" element={<MainRecipes />} />
        <Route path="/meal" element={<Meal />}/>
        <Route path="/newsLetter" element={<NewsLetter />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
      </BrowserRouter>
     </>
  )
}
