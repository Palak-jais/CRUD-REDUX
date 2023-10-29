import './App.css';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';
import Create from './components/Create';
import Update from './components/Update';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import { getUser } from './redux/userSlice';


function App() {
const dispatch=useDispatch();
  useEffect(()=>{
    const fetchData=async()=>{
        try{
            const response= await axios.get('http://localhost:5000/');
           dispatch(getUser(response.data.data));
            console.log(response);
        }
        catch(err){
            console.log(err);
        }
    }
    fetchData();
   
},[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
