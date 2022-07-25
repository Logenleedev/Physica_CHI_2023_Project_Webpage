import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Abstract from "../components/Abstract/Abstract"
import Title from "../components/Title/Title"

export default function Home() {
  return (
    <div className={styles.container}>
      <Title />
    </div>
  )
}
