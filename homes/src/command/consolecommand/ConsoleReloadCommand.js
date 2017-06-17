import React from 'react';
import {Modal, Panel, Accordion, Well, ListGroup, ListGroupItem} from "react-bootstrap";

export const ConsoleReloadCommand = React.createClass({
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
                    <Modal.Title>Reload Command</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        You can reload the plugin Homes. If you are a server administer, can use this command from
                        console.
                    </p>
                    <Accordion>

                        <Panel header="/home reload" eventKey="1" bsStyle="success">
                            <p>
                                You can reload the plugin Homes.
                            </p>
                            <ListGroup>
                                <ListGroupItem header="Permission" bsStyle="info"/>
                                <ListGroupItem>homes.command.reload</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Accordion>

                    <Panel header="Examples" bsStyle="warning">
                        <p>Reload the plugin Homes.</p>
                        <Well bsSize="small">{"/home reload"}</Well>
                    </Panel>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default ConsoleReloadCommand;
