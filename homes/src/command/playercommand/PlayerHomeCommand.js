/**
 * Created by masahiro on 2017/04/07.
 */
import React from 'react';
import {Modal, Panel, Accordion, Well, Image} from "react-bootstrap";

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
                        <Panel header="/home" eventKey="1">
                            <p>Teleport to your set default home.</p>
                            <Panel header="Permission" collapsible defaultExpanded={false}>
                                <p>
                                    <ul>
                                        <li>homes.command</li>
                                    </ul>
                                </p>
                            </Panel>
                            <Panel header="Config" collapsible defaultExpanded={false}>
                                <p>None</p>
                            </Panel>
                            <Panel header="Example" collapsible defaultExpanded={false}>
                                <Well bsSize="small">{"/home"}</Well>
                                <Image src="https://github.com/MasahiroSaito/Homes/raw/master/assets/home.gif"
                                       responsive/>
                            </Panel>
                        </Panel>
                        <Panel header="/home <home_name>" eventKey="2">
                            <p>Teleport to your set named home.</p>
                        </Panel>
                        <Panel header="/home -p <player_name>" eventKey="3">
                            <p>Teleport to player's set default home.</p>
                        </Panel>
                        <Panel header="/home <home_name> -p <player_name>" eventKey="4">
                            <p>Teleport to player's set named home.</p>
                        </Panel>
                    </Accordion>
                </Modal.Body>
            </Modal>
        </div>);
    }
});

export default PlayerHomeCommand;
