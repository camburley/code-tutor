# NEXT.JS + LangChain Conversational Chat Course

This course teaches you how to build conversational AI applications using [Langchain](https: //langchain.org/ ) and [OpenAI's API](https: //openai.com/api/ ) with [Next.js](https: //nextjs.org/ ).


## Installation

1. Clone this repo via git to use the components.

```bash
git clone https://github.com/camburley/code-tutor.git
```

2. Navigate to the cloned folder.

```bash
cd code-tutor
```

3. Use your preferred package manager to install packages.

```bash
npm i
```

## Run Development

```bash
npm run dev
```

## Fix TailWind Issues

```bash
npx prettier --write .
```



## Usage

## chatBox.js 
Ready to go out the box. I **recommended** using and changing the UI elements in this component as this has everything working together.
```typescript
import { ChatBox } from "@/components/ui/chat/chatBox"

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <ChatBox />
      </div>
    </section>
  )
}
```
## assistantChat.js
Card-like component that takes a text prop and returns the card with the text.
```typescript
import { AssistantChatCard} from "@/components/ui/chat/assistantChat"

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <AssistantChatCard text="hi" />
      </div>
    </section>
  )
}
```
## userChat.js
Card-like component that takes a text prop and returns the card with the text.
```typescript
import { UserChatCard} from "@/components/ui/chat/userChat"

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <UserChatCard text="hi" />
      </div>
    </section>
  )
}
```

## messageInput.js
Input compenent, that takes in user input for the chat, can be disabled or loading with props to control different actions.
```typescript
import { MessageInput } from "./MessageInput"

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <MessageInput
          isDisabled={isDisabled}
          isLoading={isLoading}
          inputText={inputText}
          handleKeyDown={handleKeyDown}
          handleSendMessage={handleSendMessage}
          setInputText={setInputText}
        />
      </div>
    </section>
  )
}
```
## ChatWindow.js
Scroll area conponent, used to house the chat elements and enable chat scrolling.
```typescript
import { ChatWindow } from "./ChatWindow"
     

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <ChatWindow messages={messages} scrollAreaRef={scrollAreaRef} />
      </div>
    </section>
  )
}
```
## Course Outline
This course covers the following topics:

Introduciton to Conversational AI with JavaScript

How to setup Open AI API
Build a chatbot that understands your code
Learn to use AI tools from Langchain
Deploying a Langchain app for FREE
Each topic has code examples and exercises to help you learn!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https: //vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https: //nextjs.org/ docs/deployment) for more details.

## Feedback and Contributions
Your feedback and contributions are welcome! Please feel free to open an issue or submit a pull request.

Since this projects goal is to help each other learn langchain and next.js, feel free to make a PR for any changes. Not all PR's will be approved.

# code-tutor
