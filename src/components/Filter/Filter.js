import { Formik } from 'formik';
import { FilterInput, Title, FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterWrap>
      <Title>Find contact by name</Title>
      <Formik>
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          autoComplete="off"
        ></FilterInput>
      </Formik>
    </FilterWrap>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
