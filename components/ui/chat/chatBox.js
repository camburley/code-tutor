import * as React from 'react'
import { useCallback, useState, useEffect, useRef } from 'react'
import { fetchEventSource } from "@microsoft/fetch-event-source"
import { ChatWindow } from "./ChatWindow"
import MessageInput from "./MessageInput";

export function ChatBox() {
    const [messages, setMessages] = useState([{ sender: "assistant", text: "Hey 👋 -- What can I help you understand? " }, ]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const eventSourceRef = useRef(null);

    const handleSendMessage = async () => {

        if (eventSourceRef.current) {
            eventSourceRef.current.close();  // Close existing EventSource
          }

        if(inputText.trim() !== "" && inputText !== "" && inputText !== undefined && !isLoading ){
            setIsLoading(true);
            setInputText("")

            const userMessage = { sender: "user", text: inputText.trim() }
            const assistantMessage = { sender: "assistant", text: "" }

            setMessages([...messages, userMessage, assistantMessage]);

            // Extract assistant and user messages 
            const userMessages = messages
            .filter((msg) => msg.sender === "user")
            .map((msg) => msg.text )
            userMessages.push(inputText.trim()) //include the new user message
            const assistantMessages = messages 
            .filter((msg) => msg.sender === "assistant")
            .map((msg) => msg.text)

            try {
                let currentStreamedText = ""
                eventSourceRef.current = await fetchEventSource("https://glacial-mesa-59423-9de31975a7ab.herokuapp.com/api/v1/assistant/simpleTrainedChat", {
                    method: "POST",
                    body: JSON.stringify({
                        userMessage: inputText.trim(),
                        a: JSON.stringify(assistantMessages),
                        u: JSON.stringify(userMessages),
                        llm: 35
                    }),
                    headers: { "Content-Type": "application/json" },
                    onmessage(ev) {
                        if (ev.data){
                            if(ev.data === "🤖" || ev.data === '"🤖"' ){
                                console.log("Boxing🥊🥊🥊🥊🥊");
                                eventSourceRef.current.close();
                            } else {
                                console.log("Boxing🏴‍☠️")
                            }
                            currentStreamedText += JSON.parse(ev.data) }
                         else {
                            currentStreamedText += "\n"
                          }

                        setMessages((prevMessages) => {
                            const newMessages = [...prevMessages]
                            const lastMessageIndex = newMessages.length - 1

                            newMessages[lastMessageIndex] = {
                                ...newMessages[lastMessageIndex], 
                                text: currentStreamedText,
                                id: lastMessageIndex
                            }

                            return newMessages
                        })
                        setIsLoading(false)
                        return false // tell fetchEventSource not to expect a response 
                    },
                    onerror(err) {
                        console.error("EventSource failed: ", err);
                        setIsLoading(false);
                    },

                    async onclose() {
                        console.log("connection closed");
                    },
                })
            } catch (error) {
                console.error("Error: ", error);
                setIsLoading(false);
            } finally {
                setIsLoading(false);
          
              }
        }
    };

    const handleKeyDown = (event) => {
        if(event.key === "Enter" && !event.shiftKey) {
            handleSendMessage();
            event.preventDefault();
        }
    }

    const scrollAreaRef = useRef(null);

    useEffect(() => {
        if(!isLoading && scrollAreaRef.current){
            scrollAreaRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isLoading])

    useEffect(() => {
        if(isLoading && scrollAreaRef.current){
            scrollAreaRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isLoading])

    return(
        <>
        <section>
            <ChatWindow messages={messages} scrollAreaRef={scrollAreaRef} isLoading={isLoading}  />
            <MessageInput
            isDisabled={false}
            isLoading={isLoading}
            inputText={inputText}
            handleKeyDown={handleKeyDown}
            handleSendMessage={handleSendMessage}
            setInputText={setInputText}

            />
        </section>
        </>
    )
}