import React,{useState} from 'react';
import axios from 'axios';
import { delExcelFile } from '../redux/actions';
import { delAdminFile } from '../redux/actions';
import { Button } from './button';
import { useDispatch } from 'react-redux';

export const DeleteFile=({ID=1234,filename,path,adminFile})=>{
    const [message,setMessage]=useState(null);
    const dispatch=useDispatch();

const onDelete=()=>{
    axios.post('http://localhost:2000/dashboard/delete-file',{ID:ID,name:filename,path:path}, {headers:{'Content-Type':'application/json'}})
        .then(resp=>{
            alert('file deletion successfull...');
        (adminFile===true) ? dispatch(delAdminFile(filename)) : dispatch(delExcelFile(filename));
        })    
        .catch(e=>{
          if(e.response.status===500){
         setMessage('A problem occured with the server');
    }
    setMessage('Error occured while deleting:'+e.message);
    ( (message!==null) && alert(message))
})
}


return(
<Button attrs={{clas:'deleteBtn bg-red-700 w-[20%]',id:'deleteBtn',onClick:onDelete,text:'Delete' }}/>
)
}