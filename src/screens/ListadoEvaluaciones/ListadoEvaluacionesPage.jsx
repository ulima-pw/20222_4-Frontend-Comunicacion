import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Row, Col, Button } from 'react-bootstrap'
import ListadoCiclos from "./components/ListadoCiclos";
import ListadoEvaluaciones from "./components/ListaEvaluaciones";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import RegistrarResolucionModal from "./components/RegistrarResolucionModal";

const ListadoEvaluacionesPage = () => {
    const [listadoCiclos , setListadoCiclos] = useState([])
    const [listadoEvaluaciones, setListadoEvaluaciones] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { cursoId } = useParams() // hook para obtener el parametro que viene en el path

    const httpObtenerCiclos = async () => {
        const resp = await fetch("http://localhost:4444/ciclos")
        const data = await resp.json()
        setListadoCiclos(data)
    }

    const httpObtenerEvaluaciones = async (cursoId) => {
        const resp = await fetch(`http://localhost:4444/evaluacion?curso=${cursoId}`)
        const data = await resp.json()
        setListadoEvaluaciones(data)
    }

    // Hook
    useEffect(() => {
        httpObtenerCiclos()
        httpObtenerEvaluaciones(cursoId)
    }, [])

    const onCloseModal = () => {
        setShowModal(false)
    }

    const saveResolucion = (evaluacionId, url) => {
        console.log(`EID: ${evaluacionId} url: ${url}`)
    }

    return <Layout
        makeHeader={ () => <Header titulo="Listado de Evaluaciones" /> }
        makeBody={ 
            () => <Row>
                <Col md={3}>
                    <ListadoCiclos ciclos={ listadoCiclos }/>
                </Col>
                <Col md={9}>
                    <Button variant="success"
                        className="mb-2"
                        onClick={ () => {
                            setShowModal(true)
                        }}>
                        Subir
                    </Button>
                    <ListadoEvaluaciones 
                        evaluaciones={ listadoEvaluaciones }/>
                </Col>
            </Row>
        }
        makeFooter={ () => <>
            <Footer />
            <RegistrarResolucionModal 
                evaluaciones={ listadoEvaluaciones }
                onSaveResolucion= { saveResolucion }
                showModal={ showModal }
                onCloseModal={ onCloseModal } />
        </>}
    />
}
export default ListadoEvaluacionesPage