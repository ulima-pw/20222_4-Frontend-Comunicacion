import React from "react";
import { Container } from 'react-bootstrap'

const Layout = (props) => {
    return <Container>
        { props.makeHeader() }
        { props.makeBody() }
        { props.makeFooter() }
    </Container>
}

export default Layout