import React from "react";
import { Form } from 'react-bootstrap'

const FiltroCarrera = () => {
    return <Form>
        <Form.Group>
            <Form.Label>Carrera</Form.Label>
            <Form.Select>
                <option>---- Seleccione carrera ----</option>
                <option>Ingeniería de Sistemas</option>
                <option>Ingeniería Informática</option>
            </Form.Select>
        </Form.Group>
    </Form>
}

export default FiltroCarrera