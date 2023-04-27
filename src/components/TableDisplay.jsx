import {Form, InputGroup} from 'react-bootstrap'
import '../styles/table.css'
import * as XLSX from 'xlsx/xlsx.mjs'

let link = 'https://raw.githubusercontent.com/Yale-LILY/FeTaQA/main/end2end/data/fetaQA-v1_test.json'

async function randomTableArray(link) {
    let conn = await fetch(link);
    let data = await conn.json();
    let index = Math.round(Math.random() * data.data.length);
    console.log(data.data[index])
    return {
        table: data.data[index].table_array, 
        title: data.data[index].table_page_title
    }
}

export default function TableDisplay({table, setTable, title, setTitle}) {
    function loadNewTable() {
        randomTableArray(link).then((table) => {
            setTable(table.table)
            setTitle(table.title)
        })
    }

    function upload() {
        var files = document.getElementById('file_upload').files;
        if(files.length === 0){
          alert("Please choose any file...");
          return;
        }
        var filename = files[0].name;
        var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
        if (extension === '.XLS' || extension === '.XLSX') {
            excelFileToJSON(files[0]);
        } else if (extension === '.CSV') {
            csvFileToJSON(files[0]);
        } else {
            alert("Please select a valid excel file.");
        }
    }

    function excelFileToJSON(file){
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function(e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type : 'binary'
            });
            var result;
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            var roa = XLSX.utils.sheet_to_row_object_array(worksheet);
            if (roa.length > 0) {
                result = roa;
            }
            const propertyNames = Object.keys(result[0]);
            var resultEle = [];
            resultEle.push(propertyNames);
            for (var i = 0; i < result.length; i++) {
                const propertyNames = Object.values(result[i]);
                resultEle.push(propertyNames);
            }
            setTable(resultEle);
            setTitle(null)
        }
    }

    function csvFileToJSON(file){
        var reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function(e) {
            var jsonData = [];
            var headers = [];
            var rows = e.target.result.split("\r\n");
            var cells = rows[0].split(",");   
            for(var j = 0; j < cells.length; j++){
                var headerName = cells[j].trim();
                headers.push(headerName);
            }
            jsonData.push(headers);
            for (var i = 1; i < rows.length; i++) {
                cells = rows[i].split(",");
                var rowData = {};
                for(var k = 0; k < cells.length; k++){
                    if(i === 0){
                    var headerName = cells[k].trim();
                    headers.push(headerName);
                    } else {
                        var key = headers[k];
                        if(key){
                            rowData[key] = cells[k].trim();
                        }
                    }
                }
                if(i !== 0){
                    const propertyNames = Object.values(rowData);
                    jsonData.push(propertyNames);
                }
            }
            jsonData.splice(jsonData.length - 1, 1);
            setTable(jsonData);
            setTitle(null)
        }
    }

    return (
        <>
            <InputGroup className="mb-2.5 mt-3">
                <InputGroup.Text id="basic-addon3">
                    JSON URL
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
                    onClick={e => loadNewTable()}
                >
                    Random
                </button>
            </InputGroup>

            <div className="input-group mb-3">
                <span className="input-group-prepend input-group-text">Upload file</span>
                <div className="custom-file form-control">
                    <label className="custom-file-label" for="file_upload">Choose file</label>
                    <input type="file" className="custom-file-input hidden" id="file_upload" />
                </div>
                <button 
                    id="urlBtn" 
                    className="btn btn-outline-secondary w-20" 
                    type="button"
                    onClick={e => upload()}
                >
                    Upload
                </button>
            </div>

            <div 
                id="tableContainer"
                className="
                    mt-4
                    overflow-auto
                "
            >
                <div id="tableBody">
                    {table &&
                    <table 
                        className="table-question-answering"
                    >
                        {table.map((row, index) => {
                            if (index === 0) {
                                return (
                                    <thead key={index}>
                                    {title && 
                                        <tr>
                                            <th colspan={row.length + 1} className="text-center">{title}</th>
                                        </tr>
                                    }
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