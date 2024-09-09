import React, { useContext } from "react";
import { auth_context } from "../pages/loginPage/Auth_service";
import { Card } from "./card";
import { useNavigate } from "react-router";

export const Credentials=()=>{
let deviceID='';
const {login}=useContext(auth_context);
 const navigate=useNavigate();

const onChangeX=(e)=>{deviceID=e.target.value;}

   const onSendCredentials=async (e)=>{
   // deviceID=document.getElementById('key').innerHTML;
    if(deviceID==='')return alert('Invalid input...');
try{
    await login({id:deviceID});
    sessionStorage.getItem('token') &&  navigate('/homepage');
}
catch(e){
        console.log(e.message);
        alert('something went wrong:'+e.message)
}
    }

    return(
       <Card layoutClas={"loginLayout justify-center"} cardClas={"loginCard md:w-[50%] md:ml-[15%]"} array_of_objects={[
            {tagName:'label',text:'Enter your device-id'},
            {tagName:'input',type:'text',id:'key',placeholder:'a2ed45654fsaxa',callback:onChangeX},
            {tagName:'button',text:'login',className:'loginBtn',onClick:onSendCredentials}
        ]}/>
     )
}