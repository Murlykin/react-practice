import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRcipes from '../recipes.json';
import {RecipeForm} from './RecipeForm/RecipeForm';

export class App extends Component {
  state = {
  recipes: [],
  }
    componentDidMount() {
    const savedRecipes = localStorage.getItem('recipes');
      if (savedRecipes !== null) {
        const parsedRecipes = JSON.parse(savedRecipes);
        this.setState({ recipes: parsedRecipes });
        return;
      }
      this.setState({recipes:initialRcipes})
  };
  
  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes !== this.state.recipes) {
      localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
    }
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
      };
    });
   };
  render() {
    return (
      <Layout>
        <RecipeForm onSave={this.addRecipe} />
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
};
