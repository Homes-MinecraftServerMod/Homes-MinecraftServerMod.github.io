import React from 'react';
import './App.css';

import {Navbar, Nav, NavItem} from "react-bootstrap";

const App = React.createClass({

    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {
        return (
            <div className="App">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">Homes</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}>Command</NavItem>
                            <NavItem eventKey={2}>Permission</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div id="main">
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </div>
        );
    }
});

export default App;
