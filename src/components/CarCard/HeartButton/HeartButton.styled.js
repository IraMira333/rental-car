import styled from 'styled-components';

export const HeartButtonStyle = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  line-height: 0;
  color: ${({ $isFavorite }) => ($isFavorite ? '#3470ff' : '#ffffffcc')};
  fill: ${({ $isFavorite }) => ($isFavorite ? '#3470ff' : 'transparent')};
  background-color: transparent;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
