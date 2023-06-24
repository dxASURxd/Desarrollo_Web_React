import React, { useState } from "react";
import FormCooking from "./FormCooking";
import CookingItem from "./CookingItem";

const CookingList = () => {
  const [recipeCount, setRecipeCount] = useState(3);
  const [recipes, setRecipes] = useState([
    {
      nameRepice: "Café con leche",
      // listaIngredientes: {
      //   uno: "pan",
      //   dos: "leche",
      //   tres: "café",
      //   cuatro: "azucar"
      // },
      ingredients: "pan, leche, café, azucar",
      time: 2,
    },
    {
      nameRepice: "Papas fritas",
      ingredients: "papas, aceite, sal",
      time: 15,
    },
    {
      nameRepice: "Café helado",
      ingredients: "café, hielo, azucar",
      time: 5,
    },
  ]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    setRecipeCount(recipeCount + 1);
  }

  return (
    <div className="grid grid-cols-2">
      <div className="">
        <FormCooking onSubmit={addRecipe}/>
      </div>
      <ul className="grid grid-cols-3 gap-4 mx-auto">
        {/* <li className="bg-slate-300 rounded-xl text-center w-[145px]">uno</li> */}
        {recipes.map((recipe) => (
          <li
            key={recipe.nameRepice}
            className="bg-slate-300 rounded-xl text-center w-[145px] h-auto"
          >
            <CookingItem recipe={recipe}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CookingList;
