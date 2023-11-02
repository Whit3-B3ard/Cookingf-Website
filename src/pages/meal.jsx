import data from "../data"
export default function Meal() {
  return (
    < >
    <div className="flex w-screen h-screen flex-col ">
  <div className="w-full h-2/4 bg-black flex">
    <div className='flex justify-start flex-1'>
      <img src="https://img.freepik.com/premium-photo/crispy-chicken-bites-drifting-through-air-generative-ai_94628-1092.jpg" className="h-full" alt="" />
    </div>
    <div className='flex justify-end flex-1'>
      <img src="https://a-static.besthdwallpaper.com/food-photography-chili-and-bell-pepper-falling-into-the-water-in-black-background-wallpaper-2048x1536-60495_26.jpg" className="h-full" alt="" />
    </div>
  </div>
    <div className="flex items-center justify-center  absolute z-10 inset-0 flex-col">
      <video width="520" height="320" controls autoPlay muted className="rounded-lg absolute">
      <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
    <div className="flex items-center justify-center top-1/4 pb-24 w-full flex-col  gap-2">
<h1 className="font-extrabold">Let's Get Cooking
</h1>
<h2 className="font-bold">Biscuits</h2>
<ul className="list-none">
  <li>Preptime{data.KFC.biscuits.prepTime}</li>
  <li>Cook Time: 15 minutes 

</li>
  <li>Makes 10-12 biscuits 

</li>
</ul>
<h1 className="font-bold">INGREDIENTS </h1>
<ul className="flex items-center flex-col">
 <li>2 1/2  cups (375g) all-purpose flour </li>
 
 <li> 2 teaspoons (12g) fine sea salt</li>
 
 <li> 1 teaspoon (5g) granulated sugar</li>
 
 <li>2 tablespoons (24g) baking powder</li>
 
 <li>1 cup (225g) cold unsalted butter, cubed into ¾-inch pieces</li>
 
 <li> 1 cup (237ml) buttermilk, plus more for brushing</li>
 
 <li> Melted butter, to finish (optional)</li>
 
 <li> Flakey sea salt, to garnish (optional)</li>
</ul>
<h1 className="font-bold">INSTRUCTIONS</h1>
<li>Preheat the oven to 425℉ / 218℃ . Line two sheet pans with parchment paper. </li>

<li> Add the flour, salt, sugar and baking powder to a food processor and pulse to evenly combine. </li>

<li>Add the cold butter to the food processor and pulse 6-8 times or until the butter becomes the size of peas. </li>

<li> Place the flour mixture in a large bowl and, while stirring constantly with a fork, pour in the buttermilk. Mix until the buttermilk just incorporates. </li>

<li>Turn the dough out onto a clean work surface. Quickly knead the dough together until it is a rough dough and just holds together. </li>

<li>Roll the dough into a ½-inch thick rectangle. Fold the dough into thirds, like a letter, and then roll again to a ½-inch thick rectangle. Repeat this one more time. </li>

<li>Using a circular biscuit cutter, cut as many biscuits from the dough as possible. Place the biscuits, at least ½-inch apart, on the prepared sheet pans. Bring together any dough scraps and roll into ½-inch thick and cut more biscuits. </li>

<li>Brush the biscuits with buttermilk and bake in the oven for 10-15 minutes or until the biscuits are puffed, cooked through and golden brown on the tops and bottom. </li>

<li>Remove from the oven and brush with melted butter and garnish with flakey sea salt, if you’d like. Cool the biscuits on a wire rack before serving. </li>


    </div>
    
    </div>
    </>
  )
}
