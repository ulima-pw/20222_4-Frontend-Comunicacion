import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'

const RegistroPage = () => {
    return <Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>Registro</h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Nombre
                                </Form.Label>
                                <Form.Control type='text'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Cursos
                                </Form.Label>
                                <Form.Select multiple>
                                    <option>Curso 1</option>
                                    <option>Curso 2</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control type='email'/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type='password'/>
                            </Form.Group>
                            <Button className='mt-3' variant='warning'>Registrarse</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default RegistroPage