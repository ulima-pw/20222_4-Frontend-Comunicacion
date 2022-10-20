import React from "react";

import { Row, Col, Card } from 'react-bootstrap'

const GridCursos = (props) => {

    return <div className="mt-4 mb-4">
        {
            props.cursos.map((curso) => {
                return <Row className="mb-2">
                    <Col>
                        <Card>
                            <Card.Body>{ curso.nombre }</Card.Body>
                        </Card>
                    </Col>
                </Row>
            })
        }
    </div>
}

export default GridCursos