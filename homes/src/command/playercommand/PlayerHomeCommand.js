/**
 * Created by masahiro on 2017/04/07.
 */
import React from 'react';
import {Modal, Panel, Accordion, Well, Grid, Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";

export const PlayerHomeCommand = React.createClass({
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
                    <Modal.Title>Home Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You can teleport to the preset Home by using this command.</p>
                    <Accordion>

                        <Panel header="/home" eventKey="1" bsStyle="success">
                            <Grid>
                                <Row className="show-grid"><Col md={12}><p>
                                    Teleport to your set default home.<br/>
                                </p></Col></Row>
                                <Row className="show-grid">
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Permission" bsStyle="info"/>
                                            <ListGroupItem>homes.command</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Configuration" bsStyle="info"/>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel>

                        <Panel header="/home <home_name>" eventKey="2" bsStyle="success">
                            <Grid>
                                <Row className="show-grid"><Col md={12}><p>
                                    Teleport to your set named home.<br/>
                                </p></Col></Row>
                                <Row className="show-grid">
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Permission" bsStyle="info"/>
                                            <ListGroupItem>homes.command</ListGroupItem>
                                            <ListGroupItem>homes.command.name</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Configuration" bsStyle="info"/>
                                            <ListGroupItem>Allow using named home</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel>

                        <Panel header="/home -p <player_name>" eventKey="3" bsStyle="success">
                            <Grid>
                                <Row className="show-grid"><Col md={12}><p>
                                    Teleport to player's set default home.<br/>
                                </p></Col></Row>
                                <Row className="show-grid">
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Permission" bsStyle="info"/>
                                            <ListGroupItem>homes.command</ListGroupItem>
                                            <ListGroupItem>homes.command.player</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Configuration" bsStyle="info"/>
                                            <ListGroupItem>Allow using player home</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel>

                        <Panel header="/home <home_name> -p <player_name>" eventKey="4" bsStyle="success">
                            <Grid>
                                <Row className="show-grid"><Col md={12}><p>
                                    Teleport to player's set named home.<br/>
                                </p></Col></Row>
                                <Row className="show-grid">
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Permission" bsStyle="info"/>
                                            <ListGroupItem>homes.command</ListGroupItem>
                                            <ListGroupItem>homes.command.player.name</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={4}>
                                        <ListGroup>
                                            <ListGroupItem header="Configuration" bsStyle="info"/>
                                            <ListGroupItem>Allow using named home</ListGroupItem>
                                            <ListGroupItem>Allow using player home</ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Teleport to your default home.</p>
                        <Well bsSize="small">{"/home"}</Well>
                        <p>Teleport to your home named myhome.</p>
                        <Well bsSize="small">{"/home myhome"}</Well>
                        <p>Teleport to Nepian's default home.</p>
                        <Well bsSize="small">{"/home -p Nepian"}</Well>
                        <p>Teleport to Nepian's home named myhome.</p>
                        <Well bsSize="small">{"/home myhome -p Nepian"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerHomeCommand;
