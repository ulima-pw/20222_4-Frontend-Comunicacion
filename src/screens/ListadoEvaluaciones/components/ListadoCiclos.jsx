import React from "react";
import { ListGroup } from 'react-bootstrap'

const ListadoCiclos = (props) => {
    return <ListGroup as="ul">
        {
            props.ciclos.map((ciclo) => {
                return <ListGroup.Item as="li">{ ciclo.nombre }</ListGroup.Item>
            })
        }
    </ListGroup>
}

export default ListadoCiclos