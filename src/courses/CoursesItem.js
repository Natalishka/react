import React, { Component } from 'react';
import { Col, Button, Row, Grid, ListGroup, ListGroupItem } from 'react-bootstrap';

class CoursesItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log("items", this.props.items);
        return (
            <div>



                <ListGroup>
                    {this.props.items.map((items) =>
                        <ListGroupItem key={items.id}>
                            <Row xs={12} md={12} key={items.id}>
                                <Col  xs={12} md={9} >
                                    <Row>
                                        <Col xs={6} md={4}>
                                            <h2 >{items.title}</h2>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <div className="duration label label-info">{items.duration}</div>
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <div className="date col-lg-offset-8 label label-info">01/01/01</div>
                                        </Col>
                                    </Row>

                                    <p>{items.desc}</p>
                                </Col>
                                <Col  xs={6} md={3}>
                                    <Button type="button" bsStyle="primary" className="btn btn-primary btn-lg btn-block" block>Редактировать</Button>
                                    <Button type="button" bsStyle="danger" className="btn btn-warning btn-lg btn-block" block>Удалить</Button>
                                </Col>

                            </Row>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        )

    }
}

export default CoursesItem;