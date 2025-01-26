import { useState ,useEffect,useRef} from 'react';

function App() {
  const [messages, setMessages] = useState([]); // State to store messages
  const [input, setInput] = useState(""); // State to store user input
  const messagesEndRef = useRef(null); // Ref for auto-scroll

  // Function to handle message submission
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]); // Add new message to the list
      setInput(""); // Clear input field
    }
  };

  // Scroll to the bottom of the chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
    
      <nav className="flex items-center justify-between bg-black p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo-2LzXSqsyE-transformed.png" 
            alt="logo"
            className="h-8 w-8 object-cover rounded-full border-2 border-yellow-500"
          />
          <div className="text-yellow-500 text-lg font-bold ">Rely</div>
        </div>

        {/* Button */}
        <button className="bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-black px-4 py-2 rounded-lg font-medium shadow-lg transition-all">
          New Chat
        </button>
      </nav>
       {/* Chat Section */}
       <div className="flex flex-col h-[calc(100vh-64px)] p-4 bg-gray-100">
        {/* Messages Display */}
        <div className="flex-1 overflow-y-auto bg-white rounded-lg shadow p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className="mb-2 p-2 bg-yellow-200 rounded-md shadow-sm text-black"
            >
              {message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Section */}
        <div className="flex items-center mt-4 space-x-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium shadow transition-all"
          >
            Send
          </button>
        </div>
      </div>
      
    </>
  );
}

export default App;
