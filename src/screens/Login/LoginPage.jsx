import { useState } from 'react'
import { useNavigate } from "react-router"
import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { RUTA_BACKEND } from '../../conf'
import { useEffect } from 'react'

const LoginPage = () => {
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate() // hook de navegacion

    useEffect(() => {
        const token = localStorage.getItem("TOKEN")
        if (token != null) {
            navigate("/cursos")
        }
    })
    

    const httpLogin = async (username, password) => {
        const resp = await fetch(`${ RUTA_BACKEND }/login`, {
            method : "POST",
            body : JSON.stringify({
                username : username,
                password : password
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        const data = await resp.json()

        if (data.error === "") {
            // Login fue correcto
            localStorage.setItem("TOKEN", data.token)
            navigate('/cursos')
        }else {
            // Login fue incorrecto
        }
    }

    return <Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>Login</h2>
                        <Image src={ `${ RUTA_BACKEND }/imagenes/logo.png` }/>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control 
                                    type='email'
                                    value={ correo }
                                    onChange={ (e) => setCorreo(e.target.value) }
                                    />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control 
                                    type='password'
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    />
                            </Form.Group>
                            <Button 
                                className='mt-3' 
                                variant='warning'
                                onClick={ () => {
                                    // Llamada a peticion http de login
                                    httpLogin(correo, password)
                                } }>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default LoginPage