import React from "react";
import { Form } from 'react-bootstrap'

const FiltroCarrera = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Carrera</Form.Label>
            <Form.Select
                onChange={ (evt) => { props.onCarreraSelected(evt.target.value) }}>
                <option value={"-1"}>---- Seleccione carrera ----</option>
                {
                    props.carreras.map((carrera) => {
                        return <option key={carrera.id} value={carrera.id}>
                            { carrera.nombre }
                        </option>
                    })
                }
            </Form.Select>
        </Form.Group>
    </Form>
}

export default FiltroCarrera