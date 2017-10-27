import React, { Component } from 'react';
import { FormGroup, Col, Form, Button, ControlLabel, FormControl, Checkbox, Row } from 'react-bootstrap';

class Courses extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        return (
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
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <div>
                            <div class="courses-container">
                            <div class="course row" >
                            <div class="course-content col-lg-10">
                            <div class="row course-title">
                            <h2 class="col-lg-4 v-align">Видеоурок1</h2>
                            <div class="duration col-lg-2 v-align label label-info">1h</div>
                            <div class="date col-lg-2 col-lg-offset-3 v-align label label-info">Date</div>
                        </div>

                        <p>Lorem</p>
                        </div>
                        <div class="course-controls col-lg-2">
                            <Button type="button" class="btn btn-primary btn-lg btn-block">Редактировать</Button>
                            <Button type="button" class="btn btn-warning btn-lg btn-block">Удалить</Button>
                            </div>
                            </div>
                            </div>
                        </div>
                    </Col>

                </Row>
            </ div >
        );
    }
}

export default Courses;