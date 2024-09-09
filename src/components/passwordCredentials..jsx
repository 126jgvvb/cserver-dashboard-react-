import React from "react";
import axios from "axios";
import { Card } from "./card";
import {useNavigate} from 'react-router-dom'
import { Placeholder } from "phosphor-react";


export const Password_Credentials=()=>{
let deviceID='';
let username='';
let newPassword='';
const navigate=useNavigate();

const onChange1=(e)=>{
    deviceID=e.target.value;
}

const onChange2=(e)=>{
    username=e.target.value;
}

const onChange3=(e)=>{
newPassword=e.target.value;
}


   const onSendCredentials=async (e)=>{
    if(newPassword===''||username==='' || deviceID==='' )return alert('Invalid input...');

    await axios.post('http://localhost:2000/dashboard/change-password',{ID:deviceID,newPassword:newPassword})        
                            .then(response=>{
                                if(response.status===200){
                                    navigate('/homepage');
                                } 
                                })
                            .catch(e=>{
                                if(e.status===500){
                                    alert('Something went wrong with the server...');
                                }
                                else if(e.status===404){
                                    alert('cannot connect to the server...');
                                }
                                else{
                                    console.log(e.message);
                                    alert('something went wrong...check your credentials')
                                }
                            })

    }

    return(
        <Card layoutClas={"loginLayout justify-center"} cardClas={"loginCard md:w-[50%] md:ml-[15%]"} array_of_objects={[{tagName:'label',text:'Enter your deviceID'},
            {tagName:'input',id:'key1',type:'text',placeholder:'a2ed45654fsaxa',callback:onChange1},
            {tagName:'label',text:'Enter your username'},
            {tagName:'input',id:'key2',type:'text',placeholder:'name',callback:onChange2},
            {tagName:'label',text:'Enter your new password'},
            {tagName:'input',id:'key3',type:'text',placeholder:'new password',callback:onChange3},
            {tagName:'button',text:'change',className:'button',onClick:onSendCredentials}
        ]}/>
        )
}