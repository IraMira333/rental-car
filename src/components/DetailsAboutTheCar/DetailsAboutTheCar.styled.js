import styled from 'styled-components';

export const ImageBox = styled.div`
  width: 461px;
  height: 248px;
  overflow: hidden;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ModalTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;

  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const BoxForSecondaryText = styled.div`
  margin-bottom: 14px;
`;

export const SecondaryTextLIst = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
`;

export const SecondaryTextItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  span {
    color: rgba(18, 20, 23, 0.1);
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;

  font-size: 14px;
  line-height: 1.43; /* 142.857% */
  color: #121417;
`;

export const ModalSubTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43; /* 142.857% */
  color: #121417;
`;

export const ConditionsLIst = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;
export const ConditionItem = styled.li`
  letter-spacing: -0.24px;
  padding: 7px 14px;
  margin-bottom: 8px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: rgba(54, 53, 53, 1);

  &:not(:last-child) {
    margin-right: 8px;
  }

  & span {
    font-weight: 600;
    color: #3470ff;
  }
`;

export const RentCarButton = styled.button`
  display: block;
  justify-self: end;
  width: 168px;
  padding: 12px 50px;
  margin-top: 16px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43; /* 142.857% */
  text-decoration: none;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;
