import React from "react";
import {Grid, Row, Col, Panel, PanelGroup} from "react-bootstrap";
import PlayerHomeCommand from "./playercommand/PlayerHomeCommand";
import PlayerSetCommand from "./playercommand/PlayerSetCommand";
import PlayerDeleteCommand from "./playercommand/PlayerDeleteCommand";
import PlayerListCommand from "./playercommand/PlayerListCommand";
import PlayerPrivateCommand from "./playercommand/PlayerPrivateCommand";
import PlayerInviteCommand from "./playercommand/PlayerInviteCommand";

export const Command = React.createClass({
    getInitialState() {
        return {overlay: null};
    },
    close() {
        this.setState({overlay: null});
    },
    render() {
        return (<div>{this.state.overlay}<Grid><Row className="show-grid">
            <Col md={6}><Panel header="Player Commands"><PanelGroup>

                <Panel header="Home Command" bsStyle="info" onClick={() => {
                    this.setState({overlay: <PlayerHomeCommand command={this}/>});
                }}/>
                <Panel header="Set Command" bsStyle="info" onClick={() => {
                    this.setState({overlay: <PlayerSetCommand command={this}/>});
                }}/>
                <Panel header="Delete Command" bsStyle="info" onClick={() => {
                    this.setState({overlay: <PlayerDeleteCommand command={this}/>});
                }}/>
                <Panel header="List Command" bsStyle="info" onClick={() => {
                    this.setState({overlay: <PlayerListCommand command={this}/>});
                }}/>
                <Panel header="Private Command" bsStyle="info" onClick={() => {
                    this.setState({overlay: <PlayerPrivateCommand command={this}/>});
                }}/>
                <Panel header="Invite Command" bsStyle="info" onClick={() => {
                    this.setState({overlay: <PlayerInviteCommand command={this}/>});
                }}/>
                <Panel header="Help Command" bsStyle="info" onClick={() => {

                }}/>
                <Panel header="Reload Command" bsStyle="info" onClick={() => {

                }}/>

            </PanelGroup></Panel></Col>
            <Col md={6}><Panel header="Console Commands"><PanelGroup>

                <Panel header="List Command" bsStyle="success" onClick={() => {

                }}/>
                <Panel header="Help Command" bsStyle="success" onClick={() => {

                }}/>
                <Panel header="Reload Command" bsStyle="success" onClick={() => {

                }}/>

            </PanelGroup></Panel></Col>
        </Row></Grid></div>);
    }
});

export default Command;
