import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;

export const RecipeMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RecipeHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 26px;
  width: 100%;
  height: 70px;
  background-color: #ff6b08;
  /* position: fixed; */
  color: white;
  top: 0;
  left: 0;
  right: 0;
`;

export const RecipeFooter = styled.footer`
  display: flex;
  justify-content: center;
  /* margin: 20px 200px; */
  gap: 600px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 30px;
  width: 100%;
  background-color: #ff6b08;
`;
