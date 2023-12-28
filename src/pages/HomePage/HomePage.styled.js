import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
  /* background-image: linear-gradient(
      to right,
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.1)
    ),
    url('./homePage.png'); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  outline: 1px solid red;
`;
export const NameCar = styled.span`
  color: aliceblue;
  font-size: 16px;
  font-weight: 800;
  font-style: italic;
  background: -webkit-linear-gradient(#eb4209, #eb9c09);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;
export const NameRental = styled.span`
  color: aliceblue;
  font-size: 16px;
  font-weight: 800;
  font-style: italic;
  background: -webkit-linear-gradient(left, #575655, #bab9b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 424px) {
    font-size: 14px;
  }
`;

export const HomePageText = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const HomeP = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #706f6e;
  @media screen and (max-width: 424px) {
    font-size: 12px;
  }
`;

export const HomeH4 = styled.h4`
  font-size: 14px;
  text-decoration: underline;
  color: #575655;
`;
export const HomeH3 = styled.h3`
  font-size: 16px;
  color: #575655;
`;

export const HomeH2 = styled.h2`
  font-size: 24px;
  color: #575655;
  @media screen and (max-width: 424px) {
    font-size: 20px;
  }
`;
