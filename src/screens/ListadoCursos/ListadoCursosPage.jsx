import React from "react"
import {Container} from 'react-bootstrap'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import FiltroCarrera from "./components/FiltroCarrera"
import GridCursos from "./components/GridCursos"

const ListadoCursosPage = () => {
    return <Layout
        makeHeader={ () => <Header titulo="Listado de Cursos" /> }
        makeBody={ 
            () =>  <div>
                <FiltroCarrera />
                <GridCursos />
            </div>
        }
        makeFooter={ () => <Footer /> }
    />
}

export default ListadoCursosPage