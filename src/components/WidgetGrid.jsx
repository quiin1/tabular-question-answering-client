import {Row, Col, Card} from "react-bootstrap"
import TableDisplay from "./TableDisplay";
import ChatBox from "./ChatBox"
import { useState } from 'react'

function CardSample({ title, children }) {
    return (
        <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            {children}
        </Card.Body>
        </Card>
    );
}

export default function WidgetGrid() {
    const [table, setTable] = useState()
    return(
        <Row xs={1} md={2} className="g-3 px-3">
            <Col>
                <CardSample title={"Table"}>
                    <TableDisplay table={table} setTable={setTable}/>
                </CardSample>
            </Col>
            <Col>
                <CardSample title={"Chat"}>
                    <ChatBox table={table}/>
                </CardSample>
            </Col>
        </Row>
    );
}