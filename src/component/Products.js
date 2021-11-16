import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap';

export default function Products() {
    const PURL = axios.create({ baseURL: 'http://localhost:3001/products' });
    const [products, setProducts] = useState(null);
    useEffect(() => {
        PURL.get()
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    }, [])
    return (
        <Container>
            <Row className="justify-content-around">
                {products != null && products.map((ele, index) =>
                    <Col xs={4}>
                        <Card key={index} className="m-3">
                            <Card.Img src={ele.image} alt="Card image cap" height='400' />
                            <Card.Body >
                                <Card.Title className="text-center text-primary">{ele.name}</Card.Title>
                                <Card.Text className="text-center text-success">${ele.price}</Card.Text>
                            </Card.Body>
                        </Card >
                    </Col>
                )
                }
            </Row>
        </Container>
    )
}
