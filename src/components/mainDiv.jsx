import React from "react";
import { User} from "phosphor-react";
import {Gear} from "phosphor-react";
import {Upload} from "phosphor-react";

import { useDispatch, useSelector } from "react-redux";
import { setProperty } from "C:/Users/SAVANA/react/spaceserver/src/redux/actions";

import { TabDiv } from "./tabsDiv";
import { DynamicDiv } from "./dynamicDiv";
import { Logger } from "./logger";
import { DataDownloader } from "./networkData";
import { CreateDivChildren } from "./createDivChildren";
import { CreateLabel } from "./createLabel";
import { DataViewer } from "../pages/homepage/js/textViewer";
import { DivComponent } from "./divider";

let arr=['tab-active','tab-inactive','tab-inactive'];

function ToggleTabs(str){
     switch(str){
    case 'session': arr=arr.map(item=>item='tab-inactive'); arr[0]='tab-active';  break;
    case 'admin' : arr=arr.map(item=>item='tab-inactive'); arr[1]='tab-active'; break;
    case 'Preview': arr=arr.map(item=>item='tab-inactive'); arr[2]='tab-active'; break;
     default:;
}
}


export const MainDiv=()=>{
    const dispatch=useDispatch();
    const layoutObj=useSelector((initialState)=> initialState.layoutObj);
    const updateProperty=(property,value)=>{
        dispatch(setProperty(property,value));

    }

    return(
        <DivComponent clas={"mainlayout"}>
            <DivComponent clas={"hidden firstColumn bg-myColor h-30 w-[100%] mt-[-15px] absolute md:block md:w-[20%] md:h-[580px]"} id="firstColumn">

{/*
<CreateDivChildren divNo={3} classes={[arr[0],arr[1],arr[2]]}
 children_for_each={[
        [<Upload size={20} className={`${arr[0]} `}/>,<CreateLabel  texts={['view sessions']} handler={(Event)=>{ToggleTabs('session'); updateProperty('title','uploads')}}></CreateLabel>],
        [<User size={20} className={`${arr[1]} text-white`} />,<CreateLabel texts={['Admins']} handler={(Event)=>{ToggleTabs('admin'); updateProperty('title','Admin')}}></CreateLabel>],
        [<Gear size={20} className={`${arr[2]} text-white`}/>,<CreateLabel texts={['Preview']} handler={(Event)=>{ToggleTabs('Preview'); updateProperty('title','Behavior')}}></CreateLabel>]
 ]}  />
*/}
     

              <DivComponent clas={`${arr[0]} flex items-center justify-center py-2`}>
                <Upload size={20} className={`${arr[0]}`}/>
                <label onClick={(Event)=>{ ToggleTabs('session');  updateProperty('title','uploads')}}>view sessions</label>
              </DivComponent>

                <DivComponent clas={`${arr[1]} flex items-center justify-center py-2`}>
                    <User size={20} className={`${arr[1]}`} />
                    <label onClick={(Event)=>{ ToggleTabs('admin');  updateProperty('title','Admin')}} >Admin</label>
                </DivComponent>

                 <DivComponent clas={`${arr[2]} flex items-center justify-center py-2 `}>
                    <Gear size={20} className={`${arr[2]}`}/>
                    <label  onClick={(Event)=>{  ToggleTabs('Preview'); updateProperty('title','Behavior')}}>Preview</label>
                 </DivComponent>    
 
  
   <p><label className="dwnIcon text-white">Data retrieval:</label> <DataDownloader/></p> 
           </DivComponent>


            <DivComponent clas={"secondColumn block justify-center md:ml-[20%] md:w-[80%]"}>
               <TabDiv data={layoutObj.tabConfig}/>
               <DataViewer>
                <DynamicDiv DataToRender={layoutObj}/>
                </DataViewer>
               <Logger logData={layoutObj}/> 
                </DivComponent> 
        </DivComponent>
    )
}