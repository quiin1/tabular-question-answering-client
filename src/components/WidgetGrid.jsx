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
    return(
        <Row xs={1} md={2} className="g-3 px-3">
            <Col>
                <CardSample title={"Table"}>
                    <TableDisplay />
                </CardSample>
            </Col>
            <Col>
                <CardSample title={"Chat"}>
                    <ChatBox />
                </CardSample>
            </Col>
        </Row>
    );
}