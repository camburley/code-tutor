import React, { useState, useContext } from 'react';
import TextArea from "../textarea";
import { Button } from "@nextui-org/react";

const MessageInput = ({ isDisabled, isLoading, inputText, handleKeyDown, handleSendMessage, setInputText }) => {

    const [selected, setSelected] = useState(false);
    const placeholder = "we can talk about the code for this project";

    const handleCTA = () => {
        handleSendMessage(inputText, selected);
    };

    const handleKeyDownCTA = (e) => {
        if (e.key === "Enter" ) {
            handleSendMessage(inputText);
        }
    }

    return(
        <>
        <div style={{ marginBottom: '100px' }}>
            <TextArea 
            style={{ height: '35%', width: '100%'}}
            placeholder={placeholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDownCTA}
            disabled={isLoading}
            />
            <Button 
             auto
             flat
             color={'primary'}
             onClick={handleCTA}
             disabled={isDisabled}
             style={{ width: '100%'}}
             css={{
                '&:hover': {
                    transform: 'translateY(-5px)',
                    '&:after': {
                        transform: 'scaleX(1.5) scaleY(1.6)', 
                        opacity: 0
                    }
                },
                '&:active': {
                    transform: 'translateY(-2px)'
                }
             }}
            >
                🖋
            </Button>

        </div>
        </>
    )
}

export default MessageInput;