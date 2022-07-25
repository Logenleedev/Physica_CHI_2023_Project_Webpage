import React from "react"
import styles from "../../styles/test.module.css"
import data from "../../pub_config,js"

export default function Title() {
    return (
        <div className={styles.title}>
            <h1 className={styles["title--paperTitle"]} >{data[0]["Title"]}</h1>
        </div>
    )
}