import React from "react";
import styles from './ui.module.css';
import Item from "./Item";
export default function Dashboard(){
    return<div>
       <div className={styles.main}>
        <button className={styles.btn}>Add Data</button>
        <Item/>
       </div>
    </div>
}