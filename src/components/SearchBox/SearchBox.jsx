import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.search_box}>
      <label className={css.search_box__label}>Find contact by name</label>
      <input
        className={css.search_box__field}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
