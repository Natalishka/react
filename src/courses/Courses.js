import React, { Component } from 'react';
import { FormGroup, Col, Form, Button, ControlLabel, FormControl, Checkbox, Row, Grid, NumberList} from 'react-bootstrap';
import Header from '../header/Header';
import CoursesItem from '../courses/CoursesItem.js'

const CoursesAPI = [
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

                    <CoursesItem items={CoursesAPI}/>
                </ div >
            </div>
        );
    }
}

export default Courses;