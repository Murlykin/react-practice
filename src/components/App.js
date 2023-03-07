import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { useEffect, useState } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRcipes from '../recipes.json';
import { RecipeForm } from './RecipeForm/RecipeForm';

export const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes !== null) {
      const parsedRecipes = JSON.parse(savedRecipes);
      return parsedRecipes;
    }
    return initialRcipes;
  });

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = newRecipe => {
    setRecipes(prevState => [...prevState, newRecipe]);
  };

  const deleteRecipe = recipeId => {
    setRecipes(prevState => prevState.filter(recipe => recipe.id !== recipeId));
  };

  return (
    <Layout>
      <RecipeForm onSave={addRecipe} />
      <RecipeList items={recipes} onDelete={deleteRecipe} />
      <GlobalStyle />
    </Layout>
  );
};
