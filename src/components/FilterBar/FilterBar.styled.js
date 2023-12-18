import styled from 'styled-components';
import { Form } from 'formik';
import { NumericFormat } from 'react-number-format';

export const FilterLineBox = styled.div`
  margin-bottom: 44px;
  max-width: 899px;
  padding: 20px 20px 0 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormBox = styled(Form)`
  display: flex;

  justify-content: center;
  align-items: end;
  margin-bottom: 50px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
  color: #8a8a89;

  & label {
    margin-bottom: 8px;
  }

  & .placeholder {
    display: none;
  }
`;

export const FilterItemBox = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const SelectField = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  color: #121417;
`;

export const FormattedPriceBox = styled.div`
  width: 68px;
  position: absolute;
  top: 14px;
  left: 18px;
  background-color: #f7f7fb;
  pointer-events: none;
`;

export const MileageBox = styled.div`
  display: flex;
  gap: 1px;
  background-color: rgba(138, 138, 137, 0.2);

  border: none;
  border-radius: 14px;
  overflow: hidden;
`;
export const MileageWrapper = styled.div`
  position: relative;
`;
export const Label = styled.p`
  position: absolute;
  left: 24px;
  top: 15px;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */

  color: #121417;
`;

export const InputMileage = styled.div`
  padding: 14px 24px;

  width: 160px;
  height: 48px;

  background-color: #f7f7fb;

  border: none;
  outline: none;
`;

export const FormattedMileage = styled(NumericFormat)`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */

  color: #121417;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  justify-self: end;
  padding-block: 14px;
  padding-inline: 44px;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43; /* 142.857% */
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #0b44cd;
  }
`;
