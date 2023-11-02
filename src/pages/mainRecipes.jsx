import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import SearchBar from '../components/searchbar'
import Meals from '../components/meals'


export default function MainRecipes() {
  const [list, setList] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [meals, setMeals] = useState([]);
  
  const getIngredient = async () => {
  
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
   const data = await response.json();
   const list = data.meals.map((meal) => meal.strIngredient.trim().toLowerCase())
  
    setList(list);
    console.log(list);
  }
  
  
  
  useEffect(()=>{
    getIngredient ();
  }, []);
  
  
  useEffect(()=>{
    getMeals()
  }, [searchQuery]);
  
  
  const getMeals =async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchQuery
    );
    
    const data = await response.json();
    console.log("API Response:", data);
    setMeals(data.meals);
  }
  
  console.log("meals:",meals)
  
  const handlerSearch = (e) => {
    const value = e.target.value.trim().toLowerCase();
    if(!value || value.length < 3){
  return
    }
    const findIngredients = list.filter((item) => item.includes(value));
    setIngredients(findIngredients)
    
  }
  
  console.log('ingredients:',ingredients);
  console.log('searchquery:',searchQuery)
  
  const handlerSelectIngredient = (e) => {
    const value = e.target.textContent;
    setSearchQuery(value);
    setIngredients([]);
  }
  
  
    return (
   <Layout>
    <div className="w-full h-2/4 bg-black flex">
    <div className='flex justify-start flex-1'>
      <img src="https://www.markwellfoods.com.au/wp-content/uploads/2022/07/shutterstock_1345559753-scaled.jpg" className="h-full" alt="" />
    </div>
    <div className='flex justify-end flex-1'>
      <img src="https://info.ehl.edu/hubfs/Brand_Experience_Header.jpg" className="h-full" alt="" />
    </div>
  </div>
    <Header />
    <SearchBar onChange={handlerSearch} ingredients={ingredients} handlerSelectIngredient={handlerSelectIngredient}/>
    <Meals meals={meals}/>
   </Layout>
    )
  }
  