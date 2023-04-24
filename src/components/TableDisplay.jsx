import {Table, Form, InputGroup} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import request from '../request';


async function load(link) {
    let conn = await fetch(link);
    let data = await conn.json();
    let index = Math.round(Math.random() * data.data.length);
    console.log(index)
    console.log(data.data[index].table_array)
    return data.data[index].table_array;
}

function loadLink(e) {
    let link = 'https://raw.githubusercontent.com/Yale-LILY/FeTaQA/main/end2end/data/fetaQA-v1_dev.json'
    load(link).then((tableArray) => {
        request["table"] = tableArray
        let table =  document.getElementById('table')
        let head = document.createElement("thead")
        let body = document.createElement("tbody")
        table.innerHTML = ''
        head.innerHTML = ''
        body.innerHTML = ''
        table.appendChild(head)
        table.appendChild(body)
        tableArray.forEach((row, index) => {
            if (index == 0) {
                head.innerHTML = (`
                    <tr>
                        <th>#</th>
                        ${Array.from(row).map((heading, index) => (
                            `<th key=${index}>${heading}</th>`
                        ))}
                    </tr>
                `)
            }
            else {
                body.innerHTML += (`
                    <tr>
                        <td>${index}</td>
                        ${Array.from(row).map((content, index) => (
                            `<td key=${index}>${content}</td>`
                        ))}
                    </tr>
                `)
            }
        })
    })
}


export default function TableDisplay() {
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
                    placeholder="https://raw.githubusercontent.com/Yale-LILY/FeTaQA/main/end2end/data/fetaQA-v1_dev.json"
                    />
                <button 
                    id="urlBtn" 
                    className="btn btn-outline-secondary" 
                    type="button"
                    onClick={e => loadLink(e)}
                >
                    random
                </button>
            </InputGroup>

            <Table id="table" responsive>
            </Table>
        </>
    )
}