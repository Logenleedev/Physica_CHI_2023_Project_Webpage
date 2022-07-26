import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Abstract from "../components/Abstract/Abstract"
import Title from "../components/Title/Title"
import authorList from "../pub_config.js"


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Title />
        <p className={styles.authors}>{authorList[1]["Authors"].toString()}</p>
        <Abstract />
      </div>
    </div>
  )
}
