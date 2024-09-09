import React, { useContext } from "react";
import { FileUpload } from "./fileUpload";
import { FileDownload } from "./downloadFile";
import { DeleteFile } from "./deleteFile";
import { CreateLabel } from "./createLabel";
import { DivElement } from "./createDivChildren";
import { viewing_context } from "../pages/homepage/js/textViewer";
import { return_search_results } from "../redux/actions";
import { useDispatch } from "react-redux";
import { SearchElement } from "./search";


export const DynamicDiv=({DataToRender})=>{
const {text_viewer,text}=useContext(viewing_context);
const dispatch=useDispatch();

const filterList=(Event)=>{
   // alert(Event.target.value);
    if(!Event.target) return;
dispatch(return_search_results(Event.target.value));
}

const handle_user_file=(filepath)=>{
    alert(filepath);
    text_viewer(filepath);
}

    if(!DataToRender) return;
//   alert(DataToRender.dynamicDiv.files.length);
 
if(DataToRender.dynamicDiv.title==='uploads'){
    if(DataToRender.dynamicDiv.files.length<=0) return(
        <DivElement clas={"dynamicDiv md:ml-[5%]"} >
            <CreateLabel texts={['No files available...']}/>
        </DivElement>
    )

    return( 
            <DivElement clas={"dynamicDiv device-upload md:ml-[5%] "} >
  { 
             DataToRender.dynamicDiv.files.length>0 && DataToRender.dynamicDiv.files.map(
                row=>{
                     //   alert(row.path);
                return( 
                        <DivElement clas='rowItem flex space-x-7'>
                        <CreateLabel labelNo={1} texts={[row.name]}/>
                        <FileDownload filename={row.name} filePath={row.path}/>
                        <DeleteFile ID={DataToRender.ID} adminFile={false} filename={row.name} path={row.path}/>
                        </DivElement>
            )}
            ) } 

            </DivElement>

    );
}

    if(DataToRender.dynamicDiv.title==='IO'){
        return(
               <DivElement clas="dynamicDiv md:ml-[5%]">
                <DivElement clas="fileDiv mb-12 ">
                <label>Upload the text file here</label>
                <FileUpload/>
                <strong><bold>Recent Admin uploads</bold></strong>
                <SearchElement magnifier={{clas:''}} 
                change={filterList} input={{clas:'w-[60%] border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300 text-black fixed ml-[-30%]',placeholder:'search'}} divClas={{clas:''}} />
                </DivElement>

<DivElement clas="admin-uploads">
            { 
             DataToRender.dynamicDiv.adminUploads.length>0 && DataToRender.dynamicDiv.adminUploads.map(
                row=>{
                     //   alert(row.path);
                return(
                      <DivElement clas='rowItem flex space-x-10 space-y-3 '>
                      <CreateLabel labelNo={1} texts={[row.fileName]}/>
                        <FileDownload filename={row.fileName}  filePath={row.filePath}/>
                        <DeleteFile ID={DataToRender.ID} adminFile={true} filename={row.fileName} path={row.filePath}/>
                        </DivElement>
            )}
            ) } 
            </DivElement>
            </DivElement>
        )
    }

            if(DataToRender.dynamicDiv.title==='Admin'){
                if(DataToRender.adminDetails===undefined) return(
                    <DivElement clas={'md:ml-[5%]'}><CreateLabel texts={['No files available...']}/></DivElement>
                )
                return(
                    <DivElement clas="dynamicDiv md:ml-[5%]">
                                <DivElement>
                                    {
                           DataToRender.adminDetails!==undefined &&
                                            <DivElement clas={'adminDetails space-y-4'}>
                                            <DivElement><label>Name:<strong>{ DataToRender.adminDetails.name}</strong></label></DivElement> 
                                            <DivElement><label>email:<strong>{ DataToRender.adminDetails.email}</strong></label></DivElement>
                                             <DivElement clas={"deviceID"}><label>Device ID:<strong>{ DataToRender.adminDetails.deviceID}</strong></label></DivElement>
                                             <DivElement>
                                                 <em>last updated:<strong>{ DataToRender.adminDetails.lastUpdated}</strong></em>
                                                 <label>{DataToRender.lastDate}</label>
                                                 <CreateLabel labelNo={1} texts={[DataToRender.lastUpdated]}/>
                                                 </DivElement>
                                                 <DivElement clas="aside">
                                        <p>Inorder to delete this account,you must initiate the request from the mobile app</p>
                                    </DivElement>
                                    </DivElement>                          
            }
                    </DivElement>
                    </DivElement>
                )
            }

           
                if(DataToRender.dynamicDiv.title==='Behavior')
                    if(DataToRender.behavior.length<=0) return(
                        <DivElement clas={'md:ml-[5%]'}><CreateLabel texts={'Not available...'}/></DivElement>
                    )

                    return(
                    <DivElement clas={"dynamicDiv md:ml-[5%]"}>
                    <DivElement clas={'behavior'}>
                    <DivElement className="lastSession ">
                    <em>last updated:<strong>{DataToRender.behavior[1].lastUpdated}</strong></em>
                    </DivElement>

                    <DivElement clas={"md:ml-[2%] lg:mt-[12px] lg:h-[250px] lg:bg-subTitle-500 lg:w-[15%] md:w-[73%] flex space-x-4 server-state1 h-7 mb-[.5px] absolute w-[100%] justify-center "}> { 
                    DataToRender.dynamicDiv.files.length>0 && DataToRender.dynamicDiv.files.map(
                row=>{
                    console.log(row.path);
                return(    
                <DivElement clas={'Vfiles bg-whitesmoke-500  text-black md:ml-[5%]'}>
                <CreateLabel handler={()=>{handle_user_file(row.path)}} labelNo={1} texts={[row.name]}></CreateLabel>
                </DivElement>
            )}
            ) } 
                </DivElement>



            <DivElement clas={"server-state2 mt-12 lg:w-[50%] lg:mt-[12px] lg:h-[250px] lg:ml-[20%] h-[225px] w-[100%] md:ml-[2%]  md:w-[73%]"}> { 
             DataToRender.dynamicDiv.files.length>0 && DataToRender.dynamicDiv.files.map(
                row=>{
                return(    
                <DivElement clas={'Vfiles'}>
                        <div id='viewport'>{text}</div>
                </DivElement>
            )} ) } 

                    </DivElement>
                    </DivElement>
                    </DivElement>
                    )


            }