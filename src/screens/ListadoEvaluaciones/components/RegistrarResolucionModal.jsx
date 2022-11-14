import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const RegistrarResolucionModal = (props) => {
    const [evaluacionId, setEvaluacionId] = useState("-1")
    const [url, setUrl] = useState("")

    return <Modal 
                show={props.showModal}
                onHide={ () => {
                    props.onCloseModal()
                } }>
        <Modal.Header closeButton={true}>
            <Modal.Title>Subir Resolución</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Evaluación:
                    </Form.Label>
                    <Form.Select
                        value={ evaluacionId }
                        onChange={ (evt) => {
                            setEvaluacionId(evt.target.value)
                        } }>
                        <option value={"-1"}>---- Seleccione evaluación ----</option>
                        {
                            props.evaluaciones.map((ev) =>{
                                return <option value={ev.id}>
                                    { ev.nombre }
                                </option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        URL:
                    </Form.Label>
                    <Form.Control 
                        type="text"
                        value={ url }
                        onChange={ (evt) => {
                            setUrl(evt.target.value)
                        } }/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" 
                type="button"
                onClick={ () => {
                    props.onSaveResolucion(evaluacionId, url)
                    props.onCloseModal()
                } }>
                Guardar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default RegistrarResolucionModal