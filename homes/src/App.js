import React, {Component} from 'react';
import './App.css';

import {Navbar, Nav, NavItem} from "react-bootstrap";
import Command from "./command/Command"

class App extends Component {
    constructor() {
        super();
        this.state = {
            page: (<h1>Homes</h1>),
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={() => {
                                this.setState({page: (<h1>Homes</h1>)})
                            }}>Homes</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem onClick={() => {
                                this.setState({page: (<Command />)})
                            }}>Command</NavItem>
                            <NavItem onClick={() => {
                                this.setState({page: (<h1>Permission</h1>)})
                            }}>Permission</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div id="main">
                    {this.state.page}
                </div>
            </div>
        );
    }
}

export default App;
