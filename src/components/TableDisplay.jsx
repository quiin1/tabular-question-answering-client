import {Form, InputGroup} from 'react-bootstrap'
import '../styles/table.css'

let link = 'https://raw.githubusercontent.com/Yale-LILY/FeTaQA/main/end2end/data/fetaQA-v1_dev.json'

async function randomTableArray(link) {
    let conn = await fetch(link);
    let data = await conn.json();
    let index = Math.round(Math.random() * data.data.length);
    return data.data[index].table_array;
}

export default function TableDisplay({table, setTable}) {
    function loadTable() {
        randomTableArray(link).then((tableArray) => {
            setTable(tableArray)
        })
    }
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                    Feta JSON URL
                </InputGroup.Text>
                <Form.Control 
                    id="basic-url" 
                    aria-describedby="basic-addon3" 
                    readOnly
                    placeholder={link}
                    />
                <button 
                    id="urlBtn" 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={e => loadTable()}
                >
                    random
                </button>
            </InputGroup>
            <div className="mt-4">
                <div className="overflow-auto">
                    {table &&
                    <table className="table-question-answering">
                        {table.map((row, index) => {
                            if (index === 0) {
                                return (
                                    <thead key={index}>
                                        <tr>
                                            <th>#</th>
                                            {Array.from(row).map((heading, hindex) => (
                                                <th key={hindex} className="border-2 border-gray-100 h-6">{heading}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                )
                            } else {
                                return (
                                    <tbody key={index}>
                                        <tr className="bg-white">
                                            <td>{index}</td>
                                                {Array.from(row).map((content, dindex) => (
                                                    <td key={dindex} className="border-gray-100 border-2 h-6">{content}</td>
                                                ))}
                                            </tr>
                                    </tbody>
                                    )
                                }
                            })
                        }
                    </table>
                    }
                </div>
            </div>
        </>
    )
}