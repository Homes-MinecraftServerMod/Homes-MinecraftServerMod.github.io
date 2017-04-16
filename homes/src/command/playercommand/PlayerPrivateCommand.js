import React from 'react';
import {Modal, Panel, Accordion, Well, Grid, Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";

export const PlayerPrivateCommand = React.createClass({
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
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton id="list-header">
                    <Modal.Title>Private Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        When you set your home with set command, your home is public. So other players can teleport to
                        your home. However, by using this command, you can make your home private. Then, other players
                        can not check your home with list command and can not teleport.
                    </p>
                    <Accordion>

                        <Panel header="/home private (on/off)" eventKey="1" bsStyle="success">
                            <p>
                                You can display the list of your homes.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.private</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow setting home private</ListGroupItem>
                            </ListGroup>
                        </Panel>

                        <Panel header="/home private (on/off) <home_name> " eventKey="2" bsStyle="success">
                            <p>
                                You can display the list of player's homes.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.private</ListGroupItem>
                                <ListGroupItem>homes.command.private.name</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                                <ListGroupItem>Allow setting home private</ListGroupItem>
                                <ListGroupItem>Allow using named home</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Set your default home private.</p>
                        <Well bsSize="small">{"/home private on"}</Well>
                        <p>Set your default home public.</p>
                        <Well bsSize="small">{"/home private off"}</Well>
                        <p>Set your home named myhome private.</p>
                        <Well bsSize="small">{"/home private on myhome"}</Well>
                        <p>Set your home named myhome public.</p>
                        <Well bsSize="small">{"/home private off myhome"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerPrivateCommand;

