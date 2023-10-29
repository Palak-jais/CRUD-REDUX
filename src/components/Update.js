import React, {useState} from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import styles from './ui.module.css';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';
export default function Update(){ 
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const users=useSelector(state=>state.users.users);
    const {id}=useParams();
    //console.log(id);
    const user=users.find(u=>u.id===id);
        // console.log("user",user);

    const[name,setName]=useState(user.name);
    const[email,setEmail]=useState(user.email);
    const[contact,setContact]=useState(user.contact);

    const handleUpdate=async(e)=>{
          e.preventDefault();
          try{
            const response=await axios.post('http://localhost:5000/update',{email});
           console.log(response);
            dispatch(updateUser({id,name,email,contact}));
            navigate('/');

          }catch(err){
            console.log(err);
            alert(err.message);
          }
    }
    return(
        <>
        <Navbar/>      
                <div className={styles.form}>   
                <input type='text' className={styles.input} value={name} placeholder='Enter your Name'required onChange={(e)=>setName(e.target.value)}/>
                <input type='email' className={styles.input} value={email} placeholder='Enter your Email'required onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text'className={styles.input}  value={contact} placeholder='Enter your Contact'required onChange={(e)=>setContact(e.target.value)}/>
                <button className={styles.btn} onClick={(e)=> handleUpdate(e)}>Update User</button>           
                </div>     
        </> 
    )
    }
