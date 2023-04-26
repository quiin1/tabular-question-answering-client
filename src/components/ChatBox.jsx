import { useState } from 'react'
import { predict } from '../response';

function Messages( { conversation }) {
    return (
        <div className="flex flex-col flex-grow overflow-auto mt-2 py-4 px-2 rounded-md">
            {conversation.map((content, index) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                            <div>
                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                    <p className="text-sm" style={{margin: 0}}>{content}</p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        </div>
                    )
                } else {
                    return (
                        <div key={index} className="flex w-full mt-2 space-x-3 max-w-xs">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                            <div>
                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p className="text-sm" style={{margin: 0}}>{content}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
}

export default function ChatBox({table}) {
    const [query, setQuery] = useState('')
    const [conversation, setConversation] = useState([])

    const handleChange = event => {
        setQuery(event.target.value)
    };
    const handleClick = () => {
        if (query !== "" && table) {
            let request = {
                query: query,
                table: table
            }
            predict(request).then(function(data) {
                setConversation([...conversation, query, data[0]])
            })
            setQuery('')
        }
    }
    
    const handleKeyDown = (e) => {
        if (e.key==='Enter') {
            e.preventDefault();
            handleClick()
        }
    }

    return (
        <div 
            style={{ height: '78.3vh' }}
            className="flex flex-col"
        >
            <Messages conversation={conversation} className="h-full"/>
            <div className="flex justify-items-center items-center pt-3">
                <textarea 
                    type="text" 
                    name="query" 
                    className="
                        bg-gray-100 
                        resize-none 
                        h-12 
                        focus: outline-none
                        focus: ring-blue-500 
                        pt-2.5
                        px-4 
                        rounded-3xl 
                        w-full 
                        overflow-hidden
                        mr-1
                    "
                    placeholder="Ask me a question..." 
                    rows="1" 
                    onChange={handleChange}
                    value={query}
                >
                </textarea>
                <div className="flex ml-1 ms-auto">
                    <button 
                        className="
                            rounded-full 
                            hover:bg-gray-100 
                            w-12 
                            h-12 
                            flex 
                            items-center 
                            justify-center 
                            duration-150 
                            ease-in-out 
                        " 
                        alt="Submit" 
                        data-state="closed"
                        onClick={handleClick}
                        tabIndex="0"
                        onKeyDown={e => handleKeyDown(e)}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-blue-500">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                    <button 
                        className="
                            rounded-full  
                            hover:bg-gray-100 
                            flex 
                            items-center 
                            justify-center 
                            w-12 
                            h-12 
                            duration-150 
                            ease-in-out
                        " 
                        alt="Clear history" 
                        data-state="closed"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-blue-500"
                        >
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <polyline points="23 20 23 14 17 14"></polyline>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}