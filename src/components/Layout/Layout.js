import {Container, RecipeMain} from './Layout.styled'
export const Layout = ({ children }) => {
    return (
        <Container>
            <header>header</header>
            <RecipeMain>{children}</RecipeMain>
            <footer>footer</footer>
        </Container>
    );
};