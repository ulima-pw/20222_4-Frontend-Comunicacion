import React from "react";

import { Row, Col, Card } from 'react-bootstrap'

const GridCursos = () => {
    return <div className="mt-4 mb-4">
        <Row className="mb-2">
            <Col>
                <Card>
                    <Card.Body>Ingeniería de Software 1</Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>Programación de Videojuegos</Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="mb-2">
            <Col>
                <Card>
                    <Card.Body>Ingeniería de Software 1</Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>Programación de Videojuegos</Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
}

export default GridCursos