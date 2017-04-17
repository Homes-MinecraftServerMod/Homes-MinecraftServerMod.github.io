import React from 'react';
import {Modal, Panel, Accordion, Well, ListGroup, ListGroupItem} from "react-bootstrap";

export const PlayerSetCommand = React.createClass({
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
                    <Modal.Title>Set Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You can set your location to your home.</p>
                    <Accordion>

                        <Panel header="/home set" eventKey="1" bsStyle="success">
                            <p>
                                You can set your location to your default home.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.set</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                            </ListGroup>
                        </Panel>

                        <Panel header="/home set <home_name>" eventKey="2" bsStyle="success">
                            <p>
                                You can set your location to your named home. If you want to update your named home
                                location, execute the same command again. Also, the administrator can limit the
                                number of named homes that can be set. In that case, you can not set more than the
                                restricted number of named homes.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.set</ListGroupItem>
                                <ListGroupItem>homes.command.set.name</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow using named home</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Set your location to your default home.</p>
                        <Well bsSize="small">{"/home set"}</Well>
                        <p>Set your location to your home named myhome.</p>
                        <Well bsSize="small">{"/home set myhome"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerSetCommand;
