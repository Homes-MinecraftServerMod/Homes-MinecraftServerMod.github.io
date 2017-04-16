/**
 * Created by masahiro on 2017/04/07.
 */
import React from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import PlayerHomeCommand from "./playercommand/PlayerHomeCommand";
import PlayerSetCommand from "./playercommand/PlayerSetCommand";

export const Command = React.createClass({
    getInitialState() {
        return {overlay: null};
    },
    close() {
        this.setState({overlay: null});
    },
    render() {
        return (<div>
            {this.state.overlay}
            <Grid>
                <PageHeader>Command</PageHeader>
                <Row className="show-grid">
                    <Col md={6}>
                        <ListGroup>
                            <ListGroupItem header="Player" id="list-header"/>
                            <ListGroupItem id="command-list" href="#" onClick={() => {
                                this.setState({overlay: <PlayerHomeCommand command={this}/>});
                            }}>Home Command</ListGroupItem>
                            <ListGroupItem id="command-list" href="#" onClick={() => {
                                this.setState({overlay: <PlayerSetCommand command={this}/>});
                            }}>Set Command</ListGroupItem>
                            <ListGroupItem id="command-list">Delete Command</ListGroupItem>
                            <ListGroupItem id="command-list">List Command</ListGroupItem>
                            <ListGroupItem id="command-list">Private Command</ListGroupItem>
                            <ListGroupItem id="command-list">Invite Command</ListGroupItem>
                            <ListGroupItem id="command-list">Help Command</ListGroupItem>
                            <ListGroupItem id="command-list">Reload Command</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={6}>
                        <ListGroup>
                            <ListGroupItem header="Console" id="list-header"/>
                            <ListGroupItem id="command-list">List Command</ListGroupItem>
                            <ListGroupItem id="command-list">Help Command</ListGroupItem>
                            <ListGroupItem id="command-list">Reload Command</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
});

export default Command;
