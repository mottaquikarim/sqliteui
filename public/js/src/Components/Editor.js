import React, { Component } from 'react';
const ace = require('brace');
require('brace/mode/sql');
require('brace/theme/monokai');

export default class Editor extends Component {
    componentDidMount() {
        var editor = ace.edit('Editor');
        this.editor = editor;
        editor.getSession().setMode('ace/mode/sql');
        editor.setTheme('ace/theme/monokai');
        editor.setValue("SELECT * FROM '" + this.props.activeTable + "'");
    }
    componentDidUpdate(prevProps) {
        if (this.props.freezeQuery) return;
        this.editor.setValue("SELECT * FROM '" + this.props.activeTable + "'");
    }
    click(e) {
        const query = this.editor.getValue();
        this.props.dispatch({type: 'RUN_NEW_QUERY', query})
    }
    render() {
        return (<div className="Editor" style={{
            height: window.innerHeight * 0.15 + 'px',
            width: '100%',
            position: 'relative',
            boxSizing: 'border-box',
        }}>
            <div id="Editor" style={{width: '100%', height: '100%'}}></div>
            <button onClick={(e) => this.click(e)} className="button-primary" style={{'position': 'absolute', 'bottom': '5px', 'right': '10px'}}>Execute Query</button>
        </div>);
    }
}
