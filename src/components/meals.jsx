import { Link } from 'react-router-dom';
export default function Meals({meals}) {
  return (
    <div>
      {meals.length > 0 ? 
      (<div className="w-[80%] m-auto mt-8 grid grid-cols-4 gap-8 ">
        {meals.map((meal, index) => (
          <Link to="/meal">
          <div className="rounded shadow-lg cursor-pointer pb-16" key={index}>
            <img className="w-full rounded shadow-lg" src={meal.strMealThumb}/>
            <div className="font-bold text-xl mb-2 mt-14">
            {meal.strMeal}
            </div>

          </div>
          </Link>
        ))}
        </div>)
      :
       (<div className="text-center p-10">No Meals Found</div>)}
    </div>
  )
}
