import React, {useState} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import styles from './ui.module.css';
import { addUser } from '../redux/userSlice';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Create(){ 
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[contact,setContact]=useState("");

    const createUser=async(e)=>{
          e.preventDefault();
          if(!name || !email || !contact){
            alert("please provide all fields");
            return;
          }
          try{
            const response=await axios.post('http://localhost:5000/create',{name,email,contact});
            //console.log(response);
            dispatch(addUser(response.data.data));
             navigate('/');
          }catch(err){
            //console.log(err);
            alert(err.message);
          }
          setEmail("");
          setName("");
          setContact("");
    }
    return(
        <>
        <Navbar/>      
                <div className={styles.form}>   
                <input type='text' className={styles.input} value={name} placeholder='Enter your Name'required onChange={(e)=>setName(e.target.value)}/>
                <input type='email' className={styles.input} value={email} placeholder='Enter your  Email'required onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text'className={styles.input}  value={contact} placeholder='Enter your Contact'required onChange={(e)=>setContact(e.target.value)}/>
                <button className={styles.btn} onClick={(e)=>createUser(e)}>Create User</button>           
                </div>     
        </> 
    )
    }
