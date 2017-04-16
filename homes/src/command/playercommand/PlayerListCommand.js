import React from 'react';
import {Modal, Panel, Accordion, Well, Grid, Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";

export const PlayerListCommand = React.createClass({
    getInitialState() {
        return {showModal: true};
    },
    close() {
        this.props.command.close();
        this.setState({showModal: false});
    },
    open() {
        this.setState({showModal: true});
    },
    render() {
        return (<div>
            <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                <Modal.Header closeButton id="list-header">
                    <Modal.Title>List Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You can display the list of your homes.</p>
                    <Accordion>

                        <Panel header="/home list" eventKey="1" bsStyle="success"><Grid>
                            <Row className="show-grid"><Col md={12}><p>
                                You can display the list of your homes.<br/>
                            </p></Col></Row>
                            <Row className="show-grid">
                                <Col sm={4}>
                                    <ListGroup>
                                        <ListGroupItem header="Permission" bsStyle="info"/>
                                        <ListGroupItem>homes.command.list</ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col sm={4}>
                                    <ListGroup>
                                        <ListGroupItem header="Configuration" bsStyle="info"/>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Grid></Panel>

                        <Panel header="/home list <player_name>" eventKey="2" bsStyle="success"><Grid>
                            <Row className="show-grid"><Col md={12}><p>
                                You can display the list of player's homes.<br/>
                            </p></Col></Row>
                            <Row className="show-grid">
                                <Col sm={4}>
                                    <ListGroup>
                                        <ListGroupItem header="Permission" bsStyle="info"/>
                                        <ListGroupItem>homes.command.list</ListGroupItem>
                                        <ListGroupItem>homes.command.list.player</ListGroupItem>
                                    </ListGroup>
                                </Col>
                                <Col sm={4}>
                                    <ListGroup>
                                        <ListGroupItem header="Configuration" bsStyle="info"/>
                                        <ListGroupItem>Allow using player home</ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Grid></Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Display the list of your homes.</p>
                        <Well bsSize="small">{"/home list"}</Well>
                        <p>Display the list of Nepian's homes.</p>
                        <Well bsSize="small">{"/home list Nepian"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerListCommand;

