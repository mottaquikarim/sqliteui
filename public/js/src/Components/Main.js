import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Table from './Table';
import Editor from './Editor';

import {actions} from '../actions';
import {SocketHandler} from '../sockets';

export default class Main extends Component {
    state = actions(undefined, {});

    constructor(props) {
        super(props);
        this._listenForUpdates();
    }

    _listenForUpdates() {
        SocketHandler.init((data) => {
            this.dispatch({type: 'LOAD_DATA', data})
        });
    }

    dispatch(action) {
        actions(this.state, action)
            .then((newState) => {
                this.setState(newState)
            });
    }

    render() {
        return (<div className="Inner">
            <Sidebar {...this.state} dispatch={(action) => this.dispatch(action)} />
            <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                <Table {...this.state} dispatch={(action) => this.dispatch(action)} />
                <Editor {...this.state} dispatch={(action) => this.dispatch(action)} />
            </div>
        </div>)
    }
}

/*

                <Table {...this.state} dispatch={(action) => this.dispatch(action)} />
*/
