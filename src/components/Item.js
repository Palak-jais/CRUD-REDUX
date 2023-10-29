import React from "react";
import styles from './ui.module.css';
export default function Item(){
    return<div className={styles.item}>
    <div className={styles.info}>
    <h2>Name</h2>
    <h2>Email</h2>
    <h2>Contact</h2>
    </div>
    <div className={styles.option}>
    <button className={styles.btn}>Edit</button>
    <button className={styles.btn}>Delete</button>
    </div>
    </div>
}