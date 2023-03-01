import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <RecipeList items={recipes} />
      <GlobalStyle/>     
    </div>
  );
};
