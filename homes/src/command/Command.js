/**
 * Created by masahiro on 2017/04/07.
 */
import React from 'react';
import {Grid, Row, Col, ListGroup, ListGroupItem, PageHeader} from 'react-bootstrap';
import PlayerHomeCommand from "./playercommand/PlayerHomeCommand"

export const Command = React.createClass({
    getInitialState() {
        return {overlay: null};
    },
    close() {
        this.setState({overlay: null});
    },
    render() {
        return (
            <div>
                {this.state.overlay}
                <Grid>
                    <PageHeader>Command</PageHeader>
                    <Row className="show-grid">
                        <Col lg={6}>
                            <ListGroup>
                                <ListGroupItem header="Player" id="list-header"/>
                                <ListGroupItem href="#" onClick={() => {
                                    this.setState({overlay: <PlayerHomeCommand command={this}/>});
                                }}>Home Command</ListGroupItem>
                                <ListGroupItem>Set Command</ListGroupItem>
                                <ListGroupItem>Delete Command</ListGroupItem>
                                <ListGroupItem>List Command</ListGroupItem>
                                <ListGroupItem>Private Command</ListGroupItem>
                                <ListGroupItem>Invite Command</ListGroupItem>
                                <ListGroupItem>Help Command</ListGroupItem>
                                <ListGroupItem>Reload Command</ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg={6}>
                            <ListGroup>
                                <ListGroupItem header="Console" id="list-header"/>
                                <ListGroupItem>List Command</ListGroupItem>
                                <ListGroupItem>Help Command</ListGroupItem>
                                <ListGroupItem>Reload Command</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});

export default Command;
