import React, { Component } from 'react';

export default class Sidebar extends Component {
    handleClick(e, index) {
        this.props.dispatch({type: 'UPDATE_ACTIVE TABLE', index})
    }
    render() {
        return (<div className="Sidebar">
            <p className="Sidebar__header">Tables</p>
            {this.props.tableNames.map((name, index) => {
                const linkClasses = ["Sidebar__link"];

                if (name === this.props.activeTable) {
                    linkClasses.push("Sidebar__linkactive");
                }

                return (<p className="Sidebar__item" key={index}>
                    <a className={linkClasses.join(" ")} href="#"
                       onClick={(e) => this.handleClick(e, index)}>
                        {name}
                    </a>
                </p>);
            })}
        </div>);
    }
}
