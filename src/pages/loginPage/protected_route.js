import { Children, useContext } from "react";
import {Navigate} from 'react-router-dom';
import { auth_context } from "./Auth_service";


const Protected_route=({children})=>{
    const {token1}=useContext(auth_context);  //problem with importing {token},using sessionStorage instead
    const token=sessionStorage.getItem('token');
    
    if(!token){ return <Navigate to={"/"}/> }

 return children;

}


export default Protected_route;