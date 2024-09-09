import React,{createContext,useState,useEffect} from 'react';
//import {useNavigate} from 'react-router-dom'
import axios from "axios";


const auth_context=createContext();

const Auth_provider=({children})=>{
    const {user,token,setUser}=useState(null);
 //   const navigate=useNavigate();


    useEffect(()=>{
        const token=sessionStorage.getItem('token');
        if(token){  //not being used yet
            axios.get('/login-with-token',{headers:{Authorization:`Bearer ${token}`}})
            .then(resp=>setUser(resp.data.user))
            .catch(()=>sessionStorage.removeItem('token'));
        }
    },[]);


    const login=async (credentials)=>{
        try{
     const response=await axios.post('http://localhost:2000/dashboard/admin-auth',credentials);
     if(response.status===200){
     const {token,user}=response.data;
     console.log('token: '+token+'and user: '+user);
     token && sessionStorage.setItem('token',token);
    // token && setUser(token);
     user && setUser(user);   
    }
}
catch(e){
    if(e.status===500){
        alert('Something went wrong with the server...');
    }
    else if(e.status===404){
        alert('cannot connect to the server...');
    }
    else{
        console.log(e.message);
        alert('something went wrong:'+e.message)
    }
}
}

    const logout=()=>{
      //  localStorage.removeItem('token');
        setUser(null);
    }

    return(
        <auth_context.Provider value={{user,token,login,logout}}>  
            {children}
        </auth_context.Provider>
    )
}

export {Auth_provider,auth_context}