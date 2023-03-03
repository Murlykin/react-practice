import {Container, RecipeMain, RecipeHeader, RecipeFooter } from './Layout.styled'
export const Layout = ({ children }) => {
    return (
        <Container> 
            <RecipeHeader >M E N U</RecipeHeader >
            <RecipeMain>{children}</RecipeMain>
            <RecipeFooter></RecipeFooter>
        </Container>
    );
};