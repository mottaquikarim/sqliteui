import React, { Component } from 'react';
const ReactDataGrid = require('react-data-grid');

export default class Table extends Component {
    rowGetter(i) {
        return this.props.rows && this.props.rows[i] || {};
    }

    handleGridSort(sortColumn, sortDirection) {
        this.props.dispatch({
            type: 'SORT_COLS',
            sortColumn,
            sortDirection,
        });
    }

    render() {
        return  (<ReactDataGrid
            columns={this.props.cols}
            rowGetter={(i) => this.rowGetter(i)}
            rowsCount={this.props.rows.length}
            minHeight={window.innerHeight * 0.85}
        />);
    }
}

// onGridSort={(sortColumn, sortDirection) => this.handleGridSort(sortColumn, sortDirection)}
