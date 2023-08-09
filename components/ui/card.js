import React from "react"

const Card = React.forwardRef(({ style, ...props}, ref ) => (
    <div 
    ref={ref}
    style={{ width: '100%', borderRadius: '0.5rem', borderWidth: '1px', backgroundColor: props.type === 'user' ? '#feeed8' : '#d9fbe8', color: 'var( --color-card-foreground)', boxShadow: '0 1px 2px rgba(0,0,0,0.1)', ...style}}
    {...props}
    />
));
Card.displayName = "Card";



const CardHeader = React.forwardRef(({ style, ...props }, ref ) => (
    <div 
    ref={ref}
    style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', padding: '1.5rem' }}
    {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ style, ...props }, ref ) => (
    <h3 
    ref={ref}
    style={{ fontSize: '1.125rem', fontWeight: '600', lineHeight: '1', letterSpacing: '-0.025em', ...style}}
    {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ style, ...props }, ref ) => (
    <p 
    ref={ref}
    style={{ fontSize: '0.875rem', color: 'var(--color-muted-foreground)', ...style}}
    {...props}
    />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ style, ...props }, ref ) => (
    <div 
    ref={ref}
    style={{ padding: '1.5rem 1.5rem 0', ...style}}
    {...props}
    />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ style, ...props }, ref ) => (
    <div 
    ref={ref}
    style={{ display: 'flex', alignItems: 'center', padding: '1.5rem 1.5rem 0', ...style}}
    {...props}
    />
));
CardFooter.displayName = "CardFooter";

export {
    Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter
}