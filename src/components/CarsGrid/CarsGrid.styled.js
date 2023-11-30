import styled from 'styled-components';

export const CarsGridStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-column-gap: 29px;
  grid-row-gap: 50px;
  margin-bottom: 100px;
  list-style: none;
  padding: 20px;
`;
