import React, { useRef, useState } from 'react'
import { Navigate, useLocation } from 'react-router'
import { Container, Form, Button, Row, Col, FloatingLabel, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default function Forms() {
    const ENQUIRY_URL = axios.create({ baseURL: "http://localhost:3002/enquiries" });
    const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    const regexname = RegExp(/^[A-Za-z]{3,30}$/);
    const regexphone = RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/);
    const [error, setError] = useState({ name: '', email: '', phone: '', enq: '', fields: '' });
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const fNameInput = useRef(null);
    const lNameInput = useRef(null);
    const emailInput = useRef(null);
    const phoneInput = useRef(null);
    const enqInput = useRef(null);
    let location = useLocation();
    console.log(location);
    function validate() {
        if (fNameInput.current.value == '' || lNameInput.current.value == '' || emailInput.current.value == '' || phoneInput.current.value == '' || enqInput.current.value == '') {
            setError({ ...error, fields: 'All fields are necessary<br/>' });
            setShow(true);
        }
        else {
            error.fields = '';
            error.name = (!regexname.test(fNameInput.current.value) || !regexname.test(lNameInput.current.value)) ? "Both Name Field should contain a minimum of 3 characters and should contain only alphabets" : "";

            error.email = (!regForEmail.test(emailInput.current.value)) ? "Enter valid email" : "";
            error.phone = (!regexphone.test(phoneInput.current.value)) ? error.phone = "Enter valid Phone no" : "";
            error.enq = (enqInput.current.value.length < 10) ? "enquiry should contain a minimum of 10 characters" : "";
            setError({ ...error })
            if (error.name == "" && error.email == "" && error.phone == "" && error.enq == "" && error.fields == "") {
                addEnquiry();

            }
        }
    }
    async function addEnquiry() {
        await ENQUIRY_URL.post(``, {
            "name": `${fNameInput.current.value} ${lNameInput.current.value}`,
            "phone": phoneInput.current.value,
            "email": emailInput.current.value,
            "enquiry": enqInput.current.value,
            "course": location.state
        });
        fNameInput.current.value = '';
        lNameInput.current.value = '';
        phoneInput.current.value = '';
        emailInput.current.value = '';
        enqInput.current.value = '';
        setRedirect(true);
    }
    return (
        <div>
            <h2 className='text-center text-primary' >Send us Your Enquiry</h2>
            {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You some an error!</Alert.Heading>
                <p>
                    {error.fields}
                </p>
            </Alert>}
            <Row className='justify-content-center' >
                <Col xs={8}>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control ref={fNameInput} type="text" placeholder="Enter First Name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control ref={lNameInput} type="text" placeholder="Enter Last Name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Text className="text-danger">
                                {error.name}
                            </Form.Text>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailInput} type="email" placeholder="Enter email" />
                                <Form.Text className="text-danger">
                                    {error.email}
                                </Form.Text>
                            </Form.Group>

                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control ref={phoneInput} type="text" placeholder="Enter Contact No" />
                                <Form.Text className="text-danger">
                                    {error.phone}
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label> Equiry </Form.Label>
                                <Form.Control
                                    ref={enqInput}
                                    as="textarea"
                                    placeholder="Leave a Enquiry here"
                                    style={{ height: '100px' }}
                                />
                                <Form.Text className="text-danger">
                                    {error.enq}
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Button className='my-3' variant="primary" type="button" onClick={() => validate()} >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            {redirect && <Navigate to='/course' />}
        </div>
    )
}
