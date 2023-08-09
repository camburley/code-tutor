import React from 'react';
import { Textarea } from "@nextui-org/react"

function TextArea({ style, ...props }, ref) {
    return (
        <Textarea
          css={{
            display: 'flex',
            minHeight: '80px',
            marginTop: '0px',
            width: '100%',
            padding: '0.2rem', 
            fontSize: '0.875rem',
            cursor: props.disabled ? 'not-allowed' : undefined,
            opacity: props.disabled ? 0.5 : 1, 
            ...style
          }}
          ref={ref}
          {...props}
        />
    )
}

export default React.forwardRef(TextArea);

