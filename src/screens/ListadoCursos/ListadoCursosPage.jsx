import React, { useEffect, useState } from "react"
import {Container} from 'react-bootstrap'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Layout from "../../components/Layout"
import FiltroCarrera from "./components/FiltroCarrera"
import GridCursos from "./components/GridCursos"

const ListadoCursosPage = () => {
    const [listadoCarreras, setListadoCarreras] = useState([])

    const httpObtenerCarreras = async () => {
        const resp = await fetch("http://localhost:4444/carreras")
        const data = await resp.json()
        console.log(data)
        setListadoCarreras(data)
    }

    useEffect(() => {
        httpObtenerCarreras()
    }, [])

    return <Layout
        makeHeader={ () => <Header titulo="Listado de Cursos" /> }
        makeBody={ 
            () =>  <div>
                <FiltroCarrera carreras={ listadoCarreras }/>
                <GridCursos />
            </div>
        }
        makeFooter={ () => <Footer /> }
    />
}

export default ListadoCursosPage