import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';
import classnames from 'classnames';
import {setVisibilityFilter, clearCompletedTodo} from '../../actions';
import {selectActiveTodosCount, getFilter} from '../../selectors'

const filterTitles = {
  'showAll': 'All',
  'showActive': 'Active',
  'showCompleted': 'Completed'
}

const Footer = () => {

  const dispatch = useDispatch();
  const currentFilter = useSelector(getFilter);
  const activeTodosCount = useSelector(selectActiveTodosCount);

  const FilterButton = ({filter, onChange}) => {
    const value =  filterTitles[filter];
    const handleClick = () => onChange(filter);
    const className = filter === currentFilter ? 'selected' : '';
    return (
      <a className={classnames(className, 'filter-link')} onClick={handleClick}>
      {value}
    </a>
    )
  }

  const handleClearCompleted = () => dispatch(clearCompletedTodo());
  
  const onStatusChange = (status) => dispatch(setVisibilityFilter(status));

  return (
    <div className="footer">
      <span> {activeTodosCount} Items left</span>
      <ul className="filters">
        {Object.keys(filterTitles).map(filter =>
          <li key={filter}>
            <FilterButton onChange={onStatusChange} filter={filter}/>
          </li>
        )}
      </ul>
      <a onClick= {handleClearCompleted} className="clear-completed">Clear Completed</a>
    </div>

  )
}

export default Footer;
