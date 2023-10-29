import styles from './ui.module.css';
import Item from "./Item";
import Navbar from "./Navbar";
import{ Link} from 'react-router-dom'
import {useSelector} from 'react-redux';

export default function Dashboard(){
    const users=useSelector(state=>state.users.users);
   // console.log("users",users);

    return<div className={styles.app}>
    <Navbar/>
       <div className={styles.main}>
        <Link to='/create' className={styles.btn}>Add Data</Link>
    <div className={styles.item}>
    <div className={styles.info}>
    <h2>Name</h2>
    <h2>Email</h2>
    <h2>Contact</h2>
    </div>
    </div>
    {
        users.map((user,index)=>{
           // console.log(user);
            return <Item name={user.name} email={user.email} contact={user.contact} id={user.id} key={index}/>
        })
    }
       </div>
    </div>
}