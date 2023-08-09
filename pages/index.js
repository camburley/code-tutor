import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ChatBox } from "../components/ui/chat/chatBox"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Tutor</title>
        <meta name="description" content="code tutor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='flex intems-center justify-center'>
          <ChatBox />
        </span>
      </section>

      
    </div>
  )
}
