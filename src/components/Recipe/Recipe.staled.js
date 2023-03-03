import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const Image = styled.img`
display: block;
width: 100%;
height: 240px;
object-fit: cover;
`; 

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  flex-grow: 1;
`;
export const RecipeInfo = styled.div`
display: flex;
gap: 8px;

`;

export const InfoItem = styled.div`
display: flex;
align-items: center;
gap: 6px;
`;

export const RecipeDifficulty = styled.div`

`;

export const BadgeListy = styled.div`
display: flex;
gap: 6px;
`;

export const Badge = styled.span`
padding: 8px 16px;
border: 1px solid black;
border-radius: 4px;
margin: auto;
width: 100px;
height: 42px;
text-align: center;
text-shadow: 0 0 1px #000000;
background-color: ${props => {
    if (!props.isActive) {
        return 'white';
    }
    switch (props.value) {
        case 'easy':
            return 'green';
        case 'medium':
            return 'blue';
        case 'hard':
            return 'red';
        default:
            return 'vhite';
    }

}};


color: ${props => {
    return props.isActive ? 'white' : 'black';
}};
`

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;