import React from 'react';
import {Modal, Panel, Accordion, Well, ListGroup, ListGroupItem} from "react-bootstrap";

export const ConsoleHelpCommand = React.createClass({
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
                    <Modal.Title>Help Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You can display the command list you can use. Commands you do not have their permissions are not
                        shown in the command list. In addition, You can display their usages.
                    </p>
                    <Accordion>

                        <Panel header="/home help" eventKey="1" bsStyle="success">
                            <p>
                                You can display the command list you can use. Commands you do not have their permissions
                                are not shown in the command list.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.help</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                            </ListGroup>
                        </Panel>

                        <Panel header="/home help <command_name>" eventKey="2" bsStyle="success">
                            <p>
                                You can display the command usage you can use.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.help</ListGroupItem>
                                <ListGroupItem>homes.command.help.command</ListGroupItem>
                            </ListGroup>
                            <ListGroup>
                                <ListGroupItem header="Configuration" bsStyle="info"/>
                            </ListGroup>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Display the list of Homes commands you can use.</p>
                        <Well bsSize="small">{"/home help"}</Well>
                        <p>Display the usage of invite command.</p>
                        <Well bsSize="small">{"/home help invite"}</Well>
                        <p>Display the usage of private command.</p>
                        <Well bsSize="small">{"/home help private"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default ConsoleHelpCommand;
