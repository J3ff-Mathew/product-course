import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Courses() {
    const COURSE_URL = axios.create({ baseURL: "http://localhost:3002/courses" });
    const [course, setCourse] = useState([]);
    useEffect(() => {
        COURSE_URL.get().then(res => setCourse(res.data));
    }, [])
    return (
        <div>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {course.map((element, index) =>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{element.name}</td>
                            <td>{element.description}</td>
                            <td><Button variant="info" as={Link} to='/form'
                                state={element.name}
                            >Enquire</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
