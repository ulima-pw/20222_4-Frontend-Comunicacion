import React from "react";

import { Card, Button } from 'react-bootstrap'

const ListadoEvaluaciones = () => {
    return <div>
        <Card className="mb-2">
            <Card.Body>
                Práctica Calificada 1
            </Card.Body>
            <Card.Footer>
                <Button variant="warning" size="sm">Descargar</Button>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
                Práctica Calificada 2
            </Card.Body>
            <Card.Footer>
                <Button variant="warning" size="sm">Descargar</Button>
            </Card.Footer>
        </Card>
    </div>
}

export default ListadoEvaluaciones