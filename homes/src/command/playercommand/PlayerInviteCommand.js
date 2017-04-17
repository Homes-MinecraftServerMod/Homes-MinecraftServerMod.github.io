import React from 'react';
import {Modal, Panel, Accordion, Well, ListGroup, ListGroupItem} from "react-bootstrap";

export const PlayerInviteCommand = React.createClass({
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
                    <Modal.Title>Invite Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You can invite other players to your home. The invited player can use the command to accept the
                        invitation. Also, the invitation will be automatically rejected after 30 seconds.
                    </p>
                    <Accordion>

                        <Panel header="/home invite" eventKey="1" bsStyle="success">
                            <p>
                                You can accept the invitation you received.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow invitation</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel header="/home invite <player_name>" eventKey="2" bsStyle="success">
                            <p>
                                You can invite the player to your default home.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.invite</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow invitation</ListGroupItem>
                                <ListGroupItem>Allow using player home</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel header="/home invite <player_name> <home_name>" eventKey="3" bsStyle="success">
                            <p>
                                You can invite the player to your named home.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.invite</ListGroupItem>
                                <ListGroupItem>homes.command.invite.name</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow invitation</ListGroupItem>
                                <ListGroupItem>Allow using named home</ListGroupItem>
                                <ListGroupItem>Allow using player home</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Accept the invitation you received.</p>
                        <Well bsSize="small">{"/home invite"}</Well>
                        <p>Invite Nepian to your default home.</p>
                        <Well bsSize="small">{"/home invite Nepian"}</Well>
                        <p>Invite Nepian to your home named myhome.</p>
                        <Well bsSize="small">{"/home invite Nepian myhome"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerInviteCommand;
