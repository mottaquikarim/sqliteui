import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const url = 'https://docs.google.com/spreadsheets/d/1khvSN2pcnsc7O5dr9mq8TwJv0h_zJJYLzhiZZ_KDmfM/edit#gid=0';
        return (<div className="row header">
            <h1>VC Finder</h1> 
            <a className="header__link" href={url} target="blank">
                (what is this?)
            </a>
        </div>);
    }
}
