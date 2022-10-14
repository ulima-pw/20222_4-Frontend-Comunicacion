import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import FormularioRegistroEvaluacion from "./components/FormularioRegistroEvaluacion";

const FormularioEvaluacionPage = () => {
    return <Layout 
        makeHeader={ () => <Header titulo="Registrar Evaluaci'on"/> }
        makeBody={ () => <FormularioRegistroEvaluacion /> }
        makeFooter={ () => <Footer />}
    />
}

export default FormularioEvaluacionPage