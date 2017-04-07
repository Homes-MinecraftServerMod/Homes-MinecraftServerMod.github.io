/**
 * Created by masahiro on 2017/04/07.
 */
import React, {Component} from 'react';
import {Panel, Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const Command = React.createClass({
    render() {
        return <div><Grid>
            <Row className="show-grid">
                <Col md={6} mdPush={6}>
                    <Panel collapsible defaultExpanded header={"Player Command"}>
                        <ListGroup fill>
                            <ListGroupItem>Item 1</ListGroupItem>
                            <ListGroupItem>Item 2</ListGroupItem>
                        </ListGroup>
                    </Panel>
                </Col>
                <Col md={6} mdPull={6}>
                    <Panel collapsible defaultExpanded header={"Console Command"}>
                        <ListGroup fill>
                            <ListGroupItem>Item 1</ListGroupItem>
                            <ListGroupItem>Item 2</ListGroupItem>
                        </ListGroup>
                    </Panel>
                </Col>
            </Row>
        </Grid></div>
    }
});
