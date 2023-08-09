import React, { useState, useEffect } from 'react';
import { ScrollArea } from '../scroll-area';
import { useBreakpoint } from '../../../provider/breakpoint';
import {AssistantChatCard}  from "../chat/assistantChat"
import { UserChatCard } from "../chat/userChat"


export const ChatWindow = ({ messages, ScrollAreaRef, isLoading }) => {
    const [isDataLoaded, setDataLoaded] = useState(false);
    const isDevice = useBreakpoint();

    useEffect(() => {
        setDataLoaded(true);

    }, [messages])

    return(
        <ScrollArea style={{
            marginTop: '1px',
            marginBottom: '5px',
            paddingBottom: '0px',
        }} >
            <div style={{ marginTop: '0px', height: '700px', width: isDevice.xs_mobile || isDevice.mobile || isDevice.kindaWide || isDevice.tablet ? '400px' : '800px', borderRadius: '0.5rem' }}>
                <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '150px'}}>
                </div>
                {
                    !isDataLoaded ? (<p>Loading...</p>) : (
                        messages.map((message, index) => 
                        message.sender === 'assistant' ? (

                            <AssistantChatCard key={index} text={message.text} isLoading={isLoading} />
                        ) : (
                            <UserChatCard key={index} text={message.text} type={'user'} />
                        
                        ))
                    )
                }
                <div style={{ marginTop: '25px', paddingTop: '25px' }} ref={ScrollAreaRef}></div>
            </div>
    
        </ScrollArea>
    )
}

