import {Table, Form} from 'react-bootstrap'

export default function TableDisplay() {
    return (
        <>
            <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <th key={index}>Table heading</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}