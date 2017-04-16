/**
 * Created by masahiro on 2017/04/07.
 */
import React from 'react';
import {Modal, Panel, Accordion, Well, PanelGroup} from "react-bootstrap";

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
                        {/* home ----------------------------------------------------------*/}
                        <Panel header="/home" eventKey="1" bsStyle="success">
                            <p>Teleport to your set default home.</p>
                            <PanelGroup defaultActiveKey="1.1" accordion>
                                <Panel header="Permission" eventKey="1.1" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>homes.command</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Config" eventKey="1.2" bsStyle="warning">
                                    <p>None</p>
                                </Panel>
                                <Panel header="Example" eventKey="1.3" bsStyle="warning">
                                    <p>Teleport to your default home.</p>
                                    <Well bsSize="small">{"/home"}</Well>
                                </Panel>
                            </PanelGroup>
                        </Panel>
                        {/* home name -----------------------------------------------------*/}
                        <Panel header="/home <home_name>" eventKey="2" bsStyle="success">
                            <p>Teleport to your set named home.</p>
                            <PanelGroup defaultActiveKey="1.1" accordion>
                                <Panel header="Permission" eventKey="1.1" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>homes.command</li>
                                            <li>homes.command.name</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Config" eventKey="1.2" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>Allow using named home</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Example" eventKey="1.3" bsStyle="warning">
                                    <p>Teleport to your home named myhome.</p>
                                    <Well bsSize="small">{"/home myhome"}</Well>
                                </Panel>
                            </PanelGroup>
                        </Panel>
                        {/* home player ---------------------------------------------------*/}
                        <Panel header="/home -p <player_name>" eventKey="3" bsStyle="success">
                            <p>Teleport to player's set default home.</p>
                            <PanelGroup defaultActiveKey="1.1" accordion>
                                <Panel header="Permission" eventKey="1.1" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>homes.command</li>
                                            <li>homes.command.player</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Config" eventKey="1.2" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>Allow using player home</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Example" eventKey="1.3" bsStyle="warning">
                                    <p>Teleport to Nepian's default home.</p>
                                    <Well bsSize="small">{"/home -p Nepian"}</Well>
                                </Panel>
                            </PanelGroup>
                        </Panel>
                        {/* home player name ----------------------------------------------*/}
                        <Panel header="/home <home_name> -p <player_name>" eventKey="4" bsStyle="success">
                            <p>Teleport to player's set named home.</p>
                            <PanelGroup defaultActiveKey="1.1" accordion>
                                <Panel header="Permission" eventKey="1.1" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>homes.command</li>
                                            <li>homes.command.player.name</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Config" eventKey="1.2" bsStyle="warning">
                                    <p>
                                        <ul>
                                            <li>Allow using named home</li>
                                            <li>Allow using player home</li>
                                        </ul>
                                    </p>
                                </Panel>
                                <Panel header="Example" eventKey="1.3" bsStyle="warning">
                                    <p>Teleport to Nepian's home named myhome.</p>
                                    <Well bsSize="small">{"/home myhome -p Nepian"}</Well>
                                </Panel>
                            </PanelGroup>
                        </Panel>

                    </Accordion>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerHomeCommand;
