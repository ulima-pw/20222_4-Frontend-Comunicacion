import React from "react";
import { Form, Button } from "react-bootstrap"

const FormularioRegistroEvaluacion = () => {
    return <Form>
        <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Ciclo</Form.Label>
            <Form.Select>
                <option>----- Seleccione el ciclo -----</option>
                <option>2022-2</option>
                <option>2022-1</option>
                <option>2021-2</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Curso</Form.Label>
            <Form.Select>
                <option>----- Seleccione el curso -----</option>
                <option>Programación Web</option>
                <option>Introducción a la Programación</option>
                <option>Ingeniería de Software</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Enunciado</Form.Label>
            <Form.Control type="file"/>
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Resolución</Form.Label>
            <Form.Control type="file"/>
        </Form.Group>
        <Button variant="warning">Guardar</Button>
    </Form>
}

export default FormularioRegistroEvaluacion