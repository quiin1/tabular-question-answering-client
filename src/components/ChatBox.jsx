function Messages() {
    return (
        <div className="h-full">messages here</div>
    );
}

export default function ChatBox() {
    return (
        <div 
            style={{ height: '80vh' }}
            className="flex flex-col"
        >
            <Messages/>
            <div className="flex items-center">
                <textarea 
                    type="text" 
                    name="lname" 
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
                >
                </textarea>
                <div className="flex ml-1 ms-auto">
                    <button className="rounded-full hover:bg-gray-100 w-12 h-12 flex items-center justify-center duration-150 ease-in-out " alt="Submit" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                    <button className="rounded-full  hover:bg-gray-100 flex items-center justify-center w-12 h-12 duration-150 ease-in-out" alt="Clear history" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-500">
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