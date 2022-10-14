import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Row, Col, Button } from 'react-bootstrap'
import ListadoCiclos from "./components/ListadoCiclos";
import ListadoEvaluaciones from "./components/ListaEvaluaciones";

const ListadoEvaluacionesPage = () => {
    return <Layout
        makeHeader={ () => <Header titulo="Listado de Evaluaciones" /> }
        makeBody={ 
            () => <Row>
                <Col md={3}>
                    <ListadoCiclos />
                </Col>
                <Col md={9}>
                    <Button variant="success"
                        className="mb-2">
                        Subir
                    </Button>
                    <ListadoEvaluaciones />
                </Col>
            </Row> 
        }
        makeFooter={ () => <Footer />}
    />
}
export default ListadoEvaluacionesPage