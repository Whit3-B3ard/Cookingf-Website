export default function SearchBar({ onChange, ingredients, handlerSelectIngredient }) {
  return (
    <div className="w-1/2 m-auto mt-8 sticky top-2">
      <input
      placeholder="Search by Ingredient"
      className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      type="text" 
      onChange={onChange}
      />
{ingredients.length > 0 ? <div className="absolute z-10 w-full mt-2 bg-white shadow-lg rounded-lg border border-gray-300 ">
  {ingredients.map((ingredient, index) => (
    <p
    onClick={handlerSelectIngredient}
    className="hover:underline cursor-pointer" 
    key={index}>{ingredient}</p>
  ))}
</div> : null}

    </div>
  )
}
