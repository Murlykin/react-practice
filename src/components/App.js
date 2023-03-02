import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { Component } from 'react';
import { RecipeList } from './RecipeList/RecipeList';
import initialRcipes from '../recipes.json';

export class App extends Component {
  state = {
  recipes: initialRcipes,
}
  deleteRecipe = () => { };
  render() {
    return (
      <Layout>
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipe} />
        <GlobalStyle />
      </Layout>
    );
  }
};
