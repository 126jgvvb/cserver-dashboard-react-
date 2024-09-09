import React from "react";
import { DivElement } from "./createDivChildren";
import { Cloud } from "phosphor-react";
import {List} from 'phosphor-react';


export const NavBar=()=>{
    let isOn=false;
const toggleMenu=()=>{
 isOn?document.getElementById('firstColumn').style.display='none'
: document.getElementById('firstColumn').style.display='block';
isOn=isOn?false:true;
}

    return(
        <DivElement clas={'navbar bg-myColor h-8 flex justify-between items-stretch'}>
            <DivElement clas={"flex space-x-3"}>
            <Cloud color="white" className="cloudIcon"/>
            <label className="heading  text-white">chargedServer</label>
        </DivElement>
        <List className="menu-button md:hidden" size={30} color="white" onClick={toggleMenu}/>
        </DivElement>
    )
}