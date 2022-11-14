import React from "react"
import { Button, Form, Modal } from "react-bootstrap"

const RegistrarResolucionModal = (props) => {
    return <Modal 
                show={props.showModal}
                onHide={ () => {} }>
        <Modal.Header closeButton={true}>
            <Modal.Title>Subir Resolución</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Evaluación:
                    </Form.Label>
                    <Form.Select>
                        <option>---- Seleccione evaluación ----</option>
                        <option>PC1</option>
                        <option>PC2</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        URL:
                    </Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" type="button">
                Guardar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default RegistrarResolucionModal