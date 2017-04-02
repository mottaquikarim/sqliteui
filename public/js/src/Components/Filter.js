import React, { Component } from 'react';

export default class Filter extends Component {
    handleFilter(data) {
        this.props.dispatch({type: 'FILTER_DATA', filter: data})
    }
    resultsInfo() {
        const {rows} = this.props;

        const label = (rows.length === 1) ? 'result' : 'results';
        return (<span>
            Current displaying {rows.length} {label} 
        </span>);
    }
    render() {
        return (<div className="row">
            <label htmlFor="filter">Search Filter</label>
            <input className="u-full-width" type="text" placeholder="e.g. Alex Lines..." id="filter" onChange={(e) => this.handleFilter(e.target.value)}/>
            <p  style={{textAlign: 'right'}}>{this.resultsInfo()}</p>
        </div>);
    }
}
