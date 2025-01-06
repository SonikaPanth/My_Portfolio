import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control chatbot visibility

  const sendMessage = async () => {
    const newMessages = [...messages, { text: input, isUser: true }];
    setMessages(newMessages);
    setInput("");

    // Send the query to your backend server
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: input }),
    });
    const data = await response.json();
    setMessages([...newMessages, { text: data.answer, isUser: false }]);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen); // Toggle the chatbot visibility
  };

  const closeChatbot = () => {
    setIsOpen(false); // Close the chatbot
  };

  return (
    <div>
      {/* Chatbot Icon */}
      {!isOpen && (
        <div
          onClick={toggleChatbot}
          className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-blue-700"
          
        >
          <i className="fas fa-comment">Ask Anything</i> {/* Icon for opening the chatbot */}
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
          {/* Close Button */}
          <div
            onClick={closeChatbot}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-700"
          >
            <i className="fas fa-times">Close</i> {/* Close icon */}
          </div>

          <div className="text-lg font-semibold text-center mb-4">Chatbot</div>
          <div className="h-64 overflow-auto mb-4 p-2 border-b border-gray-300">
            {/* Display messages */}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 rounded-lg ${
                  msg.isUser ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-l-lg"
              placeholder="Ask me about my resume..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
