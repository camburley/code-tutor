import React from 'react';
import {
    Card, CardTitle, CardContent, CardDescription, CardHeader, CardFooter
} from "../card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export function AssistantChatCard({ text = "Hi, how can I help you?"}){
    const splitText = text.split(/(```.*\n[\s\S]*?\n```)/);

    const processedLines = splitText.map((section, index) => {
        const codeBlockMatch = section.match(/```(.*?)\n([\s\S]*?)\n```/);

        if(codeBlockMatch){
            const [, language, code] = codeBlockMatch;
            return(
                <>
                <SyntaxHighlighter
                style={{ ...oneDark, border: '1px solid transparent', marginTop: 0 }}
                language={language.trim() || "javascript" }
                key={index}
                >
                {code.trim()}
                </SyntaxHighlighter>

                </>
            );
        }

        return(
            <span key={index} >
                {
                    section.split("\n").map((line, idx) => (
                        <React.Fragment key={idx} >
                            {line}
                            <br/>
                        </React.Fragment>
                    ))
                }
            </span>
        );
    });

    return (
        <div className='mb-[25px] ml-[25px] mt-[20px]'>
            <Card className="w-[500px]" style={{ marginTop: '10px', paddingRight: '10%', width: '100%', border: '1px solid hsl(214.3 31.8% 91.4%)'}} >
            <CardHeader>
                <CardTitle style={{ margin: 2 }}> 🤖 AI Assistant </CardTitle>
                <CardDescription style={{ margin: 2 }} >{processedLines}</CardDescription>
            </CardHeader>
            </Card>
        </div>
        
        
    )
}
