import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ListGroup, Card, Table } from 'react-bootstrap';

export default function Enquiries() {
    const ENQUIRY = axios.create({ baseURL: "http://localhost:3002/enquiries" })
    const [enquiry, setEnquiry] = useState({ Java: [], Python: [], PHP: [], JavaScript: [], MERN: [], MEAN: [] });
    let data = { Java: [], Python: [], PHP: [], JavaScript: [], MERN: [], MEAN: [] };
    async function call() {
        await ENQUIRY.get('?course=Java').then(res => data.Java = res.data);
        await ENQUIRY.get('?course=Python').then(res => data.Python = res.data);
        await ENQUIRY.get('?course=PHP').then(res => data.PHP = res.data);
        await ENQUIRY.get('?course=JavaScript-Basic').then(res => data.JavaScript = res.data)
        await ENQUIRY.get('?course=MERN').then(res => data.MERN = res.data);
        await ENQUIRY.get('?course=MEAN').then(res => data.MEAN = res.data);
        setEnquiry({ ...data });
    }
    useEffect(() => {
        call();
        console.log(enquiry.Java);
    }, [])
    return (
        <div>
            <ListGroup variant="flush">
                {enquiry.Java.length > 0 &&
                    <ListGroup.Item>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Java Enquiries</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact No</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiry.Java.map(element =>
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.enquiry}</td>
                                                </tr>)}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
                {enquiry.Python.length > 0 &&
                    <ListGroup.Item>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Python Enquiries</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact No</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiry.Python.map(element =>
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.enquiry}</td>
                                                </tr>)}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
                {enquiry.PHP.length > 0 &&
                    <ListGroup.Item>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>PHP Enquiries</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact No</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiry.PHP.map(element =>
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.enquiry}</td>
                                                </tr>)}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
                {enquiry.JavaScript.length > 0 &&
                    <ListGroup.Item>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>JavaScript Enquiries</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact No</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiry.JavaScript.map(element =>
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.enquiry}</td>
                                                </tr>)}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
                {enquiry.MERN.length > 0 &&
                    <ListGroup.Item>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>MERN Enquiries</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact No</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiry.MERN.map(element =>
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.enquiry}</td>
                                                </tr>)}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }
                {enquiry.MEAN.length > 0 &&
                    <ListGroup.Item>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>MEAN Enquiries</Card.Title>
                                <Card.Text>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Contact No</th>
                                                <th>Enquiry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {enquiry.MEAN.map(element =>
                                                <tr>
                                                    <td>{element.name}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.phone}</td>
                                                    <td>{element.enquiry}</td>
                                                </tr>)}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                }

            </ListGroup>
        </div>
    )
}
