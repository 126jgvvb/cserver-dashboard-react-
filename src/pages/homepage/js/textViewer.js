    import React,{useEffect,createContext, useState} from 'react';
    import { useSelector } from 'react-redux';


    let cnt=0;
const viewing_context=createContext();

const DataViewer=({children})=>{
    let [error,setError]=useState(null);
   let [text,setText]=useState('');
    const reader=new FileReader();
    const layoutObj=useSelector((initialState)=> initialState.layoutObj);
    reader.onload=(e)=>setText(e.target.result);
  

    const fetch_Text_file=async(path)=>{
     //   alert(path);
        if(cnt===1) return;
               ++cnt;     
           try{
        const resp=await fetch(`http://localhost:2000/dashboard/download?path=${path}`);
            const info=await resp.text();
            if(info===undefined){   alert('Error while retrieving file to view');  throw new Error('Network error....')}
          else{
           // alert('-----');
            setText(info);
            setTimeout(()=>{cnt=0},2000);
            }
         
    }
        catch(e){
            setError(e);
        }

    }


    useEffect(()=>{
        if(layoutObj.dynamicDiv.files.length<1) return; 
const  filepath=layoutObj.dynamicDiv.files[0].path;
fetch_Text_file(filepath);
            });
 const text_viewer=async (filepath)=>{
    // alert(filepath);
await fetch_Text_file(filepath);
    }


return(
    <viewing_context.Provider value={{text_viewer,text}}>
        {children}
    </viewing_context.Provider>
)

}

export {DataViewer,viewing_context}