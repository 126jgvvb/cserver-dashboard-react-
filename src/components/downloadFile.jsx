import React from "react";
import { Button } from "./button";
import { DivElement } from "./createDivChildren";


export const FileDownload=({filename,filePath})=>{
let path=filePath;
    const startDownload=async ()=>{
        try{
            const response=await fetch(`http://localhost:2000/dashboard/download?path=${path}`);
            const blob=await response.blob();
            const url=window.URL.createObjectURL(new Blob([blob]));
            const link=document.createElement('a');
            link.href=url;
            link.setAttribute('download',filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }
        catch(e){
            console.error('Error while downloading file...');
        }
    }

return(
<Button attrs={{clas:'downloadBtn bg-green-700 ml-[200px] w-[30%]',onClick:startDownload,text:'Download' }}/>
)


}