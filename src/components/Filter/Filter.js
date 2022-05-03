import PropTypes from 'prop-types';

import { FilterDescription, FilterContact, Input } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => getFilter(state));
  const onChange = ({ target: { value } }) =>
    dispatch(update(value.toLowerCase()));

  return (
    <FilterContact>
      <FilterDescription>Find contact by name</FilterDescription>
      <Input value={filter} onChange={onChange} />
    </FilterContact>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
