import React from "react";
import {Grid, Row, Col, Panel, Button} from "react-bootstrap";
import PlayerHomeCommand from "./playercommand/PlayerHomeCommand";
import PlayerSetCommand from "./playercommand/PlayerSetCommand";
import PlayerDeleteCommand from "./playercommand/PlayerDeleteCommand";
import PlayerListCommand from "./playercommand/PlayerListCommand";
import PlayerPrivateCommand from "./playercommand/PlayerPrivateCommand";
import PlayerInviteCommand from "./playercommand/PlayerInviteCommand";
import PlayerHelpCommand from "./playercommand/PlayerHelpCommand";
import PlayerReloadCommand from "./playercommand/PlayerReloadCommand";

export const Command = React.createClass({
    getInitialState() {
        return {overlay: null};
    },
    close() {
        this.setState({overlay: null});
    },
    render() {
        return (<div>{this.state.overlay}<Grid><Row className="show-grid">
            <Col md={6}><Panel header="Player Commands" bsStyle="info">

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerHomeCommand command={this}/>});
                }}>Home Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerSetCommand command={this}/>});
                }}>Set Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerDeleteCommand command={this}/>});
                }}>Delete Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerListCommand command={this}/>});
                }}>List Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerPrivateCommand command={this}/>});
                }}>Private Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerInviteCommand command={this}/>});
                }}>Invite Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerHelpCommand command={this}/>});
                }}>Help Command</Button>

                <Button bsStyle="info" block onClick={() => {
                    this.setState({overlay: <PlayerReloadCommand command={this}/>});
                }}>Reload Command</Button>

            </Panel></Col>
            <Col md={6}><Panel header="Console Commands" bsStyle="success">

                <Button bsStyle="success" block onClick={() => {

                }}>List Command</Button>

                <Button bsStyle="success" block onClick={() => {

                }}>Help Command</Button>

                <Button bsStyle="success" block onClick={() => {

                }}>Reload Command</Button>

            </Panel></Col>
        </Row></Grid></div>);
    }
});

export default Command;
