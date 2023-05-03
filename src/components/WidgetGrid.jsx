import { useState } from 'react'
import {Row, Col, Card} from "react-bootstrap"
import TableDisplay from "./TableDisplay";
import ChatBox from "./ChatBox"

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
    const [title, setTitle] = useState()
    const [sql, setSQL] = useState()
    return(
        <Row xs={1} md={2} className="g-3 px-3 overflow-hidden">
            <Col>
                <CardSample title={"Table/Database"}>
                    <TableDisplay 
                        table={table}
                        setTable={setTable}
                        title={title}
                        setTitle={setTitle}
                        sql={sql}
                        setSQL={setSQL}
                    />
                </CardSample>
            </Col>
            <Col>
                <CardSample title={"Chat/Conversation"}>
                    <ChatBox table={table} title={title} sql={sql}/>
                </CardSample>
            </Col>
        </Row>
    );
}