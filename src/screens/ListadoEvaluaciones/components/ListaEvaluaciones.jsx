import React from "react";

import { Card, Button } from 'react-bootstrap'

const ListadoEvaluaciones = (props) => {
    return <div>
        {
            // EXPRESION javascript
            (() => {
                if (props.evaluaciones.length === 0) {
                    return <div>No hay evaluaciones para este curso</div>
                }else {
                    return props.evaluaciones.map((evaluacion) => {
                        return <Card className="mb-2" key={ evaluacion.id }>
                            <Card.Body>
                                { evaluacion.nombre }
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="warning" size="sm">Descargar</Button>
                            </Card.Footer>
                        </Card>
                    })
                }
            })()
        }
    </div>
}

export default ListadoEvaluaciones