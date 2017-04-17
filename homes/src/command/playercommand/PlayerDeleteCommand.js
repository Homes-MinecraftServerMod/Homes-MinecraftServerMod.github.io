import React from 'react';
import {Modal, Panel, Accordion, Well, ListGroup, ListGroupItem} from "react-bootstrap";

export const PlayerDeleteCommand = React.createClass({
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
                    <p>You can delete your home.</p>
                    <Accordion>

                        <Panel header="/home delete" eventKey="1" bsStyle="success">
                            <p>
                                You can delete your default home.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.delete</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                            </ListGroup>
                        </Panel>

                        <Panel header="/home delete <home_name>" eventKey="2" bsStyle="success">
                            <p>
                                You can delete your named home.<br/>
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.delete</ListGroupItem>
                                <ListGroupItem>homes.command.delete.name</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow using named home</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Delete your default home.</p>
                        <Well bsSize="small">{"/home delete"}</Well>
                        <p>Delete your home named myhome.</p>
                        <Well bsSize="small">{"/home delete myhome"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerDeleteCommand;

