import React from "react";
import { ListGroup } from 'react-bootstrap'

const ListadoCiclos = () => {
    return <ListGroup as="ul">
        <ListGroup.Item as="li" active>2022-2</ListGroup.Item>
        <ListGroup.Item as="li" >2022-1</ListGroup.Item>
        <ListGroup.Item as="li" >2021-2</ListGroup.Item>
        <ListGroup.Item as="li" >2021-1</ListGroup.Item>
    </ListGroup>
}

export default ListadoCiclos