import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CarImgBox = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardModel = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  color: #121417;

  & span {
    color: #3470ff;
  }
`;

export const CarPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  color: #121417;
`;
export const CarDescription = styled.div`
  margin-top: 8px;
  max-height: 40px;
  color: #12141780;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  & span {
    color: #12141710;
  }
`;
