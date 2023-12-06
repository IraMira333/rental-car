import { CARSBRANDARRAY } from 'constants/CARSBRANDARRAY';
import { Formik, Field } from 'formik';
import { createArrayWithStep } from 'helpers/helpers';
import {
  FilterItemBox,
  FilterLineBox,
  FormBox,
  InputMileage,
  Label,
  MileageBox,
  MileageWrapper,
  SearchButton,
  SelectField,
} from './FilterBar.styled';

const FilterBar = ({ params, setParams }) => {
  const initialValues = {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };
  const isSubmitting = false;
  const prices = createArrayWithStep(30, 550, 10);

  const onSubmit = async values => {
    console.log(values);
    setParams({ ...params, ...values, page: 1 });
  };

  return (
    <FilterLineBox>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <FormBox>
          <FilterItemBox>
            <label htmlFor="">Car brand</label>
            <SelectField
              name="make"
              as="select"
              style={{
                width: '224px',
              }}
            >
              <option value="">All</option>
              {CARSBRANDARRAY.map(make => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </SelectField>
          </FilterItemBox>

          <FilterItemBox>
            <label htmlFor="price">Price/ 1 hour</label>
            <SelectField
              name="price"
              as="select"
              style={{
                width: '125px',
              }}
            >
              <option value="" disabled>
                To $
              </option>
              {prices.map(price => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </SelectField>
          </FilterItemBox>

          <FilterItemBox>
            <label htmlFor="mileage">Сar mileage / km</label>
            <MileageBox>
              <MileageWrapper>
                <Label>From</Label>
                <InputMileage
                  name="mileageFrom"
                  type="number"
                  min="0"
                  padding="70px"
                />
              </MileageWrapper>
              <MileageWrapper>
                <Label>To</Label>
                <InputMileage
                  name="mileageTo"
                  type="number"
                  min="0"
                  padding="48px"
                />
              </MileageWrapper>
            </MileageBox>
          </FilterItemBox>

          <SearchButton type="submit" disabled={isSubmitting}>
            Search
          </SearchButton>
        </FormBox>
      </Formik>
    </FilterLineBox>
  );
};

export default FilterBar;
