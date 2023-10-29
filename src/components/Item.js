import React from "react";
import styles from './ui.module.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { deleteUser } from "../redux/userSlice";
export default function Item({name,email,contact,id}){

 const dispatch=useDispatch();
    const deleteItem=async(e)=>{
        e.preventDefault();
        try{
            const response= await axios.post('http://localhost:5000/delete',{email});
            //console.log(response);
            dispatch(deleteUser({id}));
        }
        catch(err){
            alert(err.message);
        }
        
    }
    return<div className={styles.item}>
    <div className={styles.info}>
    <h2>{name}</h2>
    <h2>{email}</h2>
    <h2>{contact}</h2>
    </div>
    <div className={styles.option}>
    <Link to={`/update/${id}`} className={styles.btn}>Edit</Link>
    <button className={styles.btn} onClick={(e)=>deleteItem(e)}>Delete</button>
    </div>
    </div>
}