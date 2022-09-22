import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(87, 88, 89);
  padding: 2rem;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const Head = styled.header`
  display: flex;
  justify-content: center;
  height: 70px;
  background-color: #9d2626;
  align-items: center;

  h1{
    font-size: 50px;
    color: #256895;
  }
`;

export const Hello = styled.h1`
  font-size: 50px;
  color: ${props => props.color};
`
