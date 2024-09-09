import React from "react"
import { Password_Layout } from "../../components/newPasswordLayout";
import { Password_Credentials } from "../../components/passwordCredentials.";
import './styles/passwordStyles.css'
 
function Password(){
    return(
        <div className="App">
            <Password_Credentials/>
        </div>
    )
}

export default Password;