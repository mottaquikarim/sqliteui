import {defaultModel} from './store';
import {freezeQuery, loadData, updateActiveTable, runQuery} from './reducers';

const actions = (state = defaultModel, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
        const {data} = action;
        return loadData(state, data);
    case 'UPDATE_ACTIVE TABLE':
        const {index} = action;
        return updateActiveTable(state, index);
    case 'RUN_NEW_QUERY':
        const {query} = action;
        return runQuery(state, query);
    case 'FREEZE_QUERY_UPDATES':
        return freezeQuery(state);
    case 'SORT_COLS':
        const {sortColumn, sortDirection} = action;
        return sortData(state, sortColumn, sortDirection);
    case 'FILTER_DATA':
        return filterData(state, action.filter);
    default:
      return state;
  }
}

export {actions}

