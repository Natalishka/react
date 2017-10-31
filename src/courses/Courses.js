import React, { Component } from 'react';
import { FormGroup, Col, Form, Button, ControlLabel, FormControl, Checkbox, Row, Grid } from 'react-bootstrap';
import Header from '../header/Header'

const CoursesAPI = {
    courses : [
        { 'title': 'Видеокурс1',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
            'date': new Date(),
            'duration': 120,
            'id': 1
        },
        { 'title': 'Видеокурс2',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
            'date': new Date(),
            'duration': 90,
            'id': 2
        },
        { 'title': 'Видеокурс3',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus distinctio dolore, eius ex exercitationem fugit itaque molestiae natus nostrum nulla perferendis praesentium quod recusandae rem similique tempora velit voluptas',
            'date': new Date(),
            'duration': 75,
            'id': 3
        }
    ]
}

class Courses extends Component {

    constructor(props) {
        super(props);

    }

    



    render() {
        return (
            <div>
                <Header />
                <div className = "Courses" >
                    <Form horizontal >
                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={4}>
                                <FormControl
                                    type="text"
                                    placeholder="Фрагмент имени или дата"
                                />
                            </Col>
                            <Col sm={2}>
                                <Button
                                    type="button">
                                    Найти
                                </Button>
                            </Col>
                            <Col smOffset={2} sm={2}>
                                <Button
                                    type="button">
                                        Добавить курс
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    <Grid className="show-grid">
                        <Row xs={12} md={12}>
                            <Col  xs={12} md={8} >
                                <Row>
                                    <Col xs={6} md={4}>
                                        <h2 >Видеоурок1</h2>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div className="duration label label-info">1h</div>
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <div className="date col-lg-offset-8 label label-info">Date</div>
                                    </Col>
                                </Row>

                                <p>Lorem</p>
                            </Col>
                            <Col  xs={6} md={2}>
                                <Button type="button" bsStyle="primary" className="btn btn-primary btn-lg btn-block" block>Редактировать</Button>
                                <Button type="button" bsStyle="danger" className="btn btn-warning btn-lg btn-block" block>Удалить</Button>
                            </Col>

                        </Row>
                    </Grid>
                </ div >
            </div>
        );
    }
}

export default Courses;