import React from "react"
import styles from "../../styles/Abstract.module.css"
import data from "../../pub_config.js"


export default function Abstract() {
    return (
        <div>
            <h2 className={styles["abstract--section-name"]}>Abstract</h2>
            <p className={styles["abstract--text"]} >{data[0]["Abstract"]}</p>
        </div>
    )
}