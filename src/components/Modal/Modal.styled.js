import styled from "styled-components";

export const ModalStale = styled.div`
display: flex;
flex-direction: column;
row-gap: 16px;

`;

export const ModalImg = styled.img`
width: 560px;
box-shadow: 0px 0px 15px 10px #E8F3DE;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 42px;
  border-radius: 5px;
  border: 1px solid #ff6b08;
  transition: box-shadow 400ms ease-in, color 400ms ease-in,
  background-color 400ms ease-in;
  color: #ff6b08;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 0 0 1px #000000;
  margin: auto;

  &:hover {
    color: #ffffff;
    background-color: #ff6b08;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
 `;