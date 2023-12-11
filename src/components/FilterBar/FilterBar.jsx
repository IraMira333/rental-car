import { CARSBRANDARRAY } from 'constants/CARSBRANDARRAY';
import { Formik, useFormik } from 'formik';
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
import CustomSelect from './Select/Select';
//import { NumericFormat } from 'react-number-format';

const brandOptions = CARSBRANDARRAY.map(make => ({
  value: make,
  label: make,
}));
const prices = createArrayWithStep(30, 550, 10);
const priceOptions = prices.map(price => ({
  value: price,
  label: price,
}));

const FilterBar = ({ params, setParams }) => {
  const formik = useFormik({
    initialValues: {
      make: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
    },
    onSubmit: values => {
      console.log(values);

      setParams({ ...params, ...values, page: 1 });
    },
  });

  return (
    <FilterLineBox>
      <Formik
        onSubmit={formik.handleSubmit}
        initialValues={formik.initialValues}
      >
        {({ isSubmitting }) => (
          <FormBox>
            <FilterItemBox>
              <label htmlFor="make">Car brand</label>
              <SelectField
                style={{
                  width: '224px',
                }}
              >
                <CustomSelect
                  options={brandOptions}
                  value={formik.values.make}
                  onChange={value => formik.setFieldValue('make', value.value)}
                />
              </SelectField>
            </FilterItemBox>

            <FilterItemBox>
              <label htmlFor="price">Price/ 1 hour</label>
              <SelectField
                style={{
                  width: '125px',
                }}
              >
                <CustomSelect
                  options={priceOptions}
                  value={formik.values.make}
                  onChange={value => formik.setFieldValue('make', value.value)}
                />
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
                    onChange={formik.handleChange}
                    value={formik.values.mileageFrom}
                    padding="70px"
                  />
                </MileageWrapper>
                <MileageWrapper>
                  <Label>To</Label>
                  <InputMileage
                    name="mileageTo"
                    type="number"
                    min="0"
                    onChange={formik.handleChange}
                    value={formik.values.mileageTo}
                    padding="48px"
                  />
                </MileageWrapper>
              </MileageBox>
            </FilterItemBox>

            <SearchButton type="submit" disabled={isSubmitting}>
              Search
            </SearchButton>
          </FormBox>
        )}
      </Formik>
    </FilterLineBox>
  );
};

export default FilterBar;
