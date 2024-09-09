  import React,{useState} from 'react';
  import axios from 'axios';
 import { DivElement } from './createDivChildren';

  export const FileUpload=()=>{
    const [file,setFile]=useState(null);
    const [message,setMessage]=useState(true);


    const onChange=e=>{
    //    alert(e.target.files[0]);
        setFile(e.target.files[0]);
    }

    const onSubmit=async e=>{
        e.preventDefault();
        if(!file) return alert('No file chosen');

        const Data=new FormData();
        Data.append('file',file);
        Data.append('ID','1234');

        try{
            // eslint-disable-next-line no-unused-vars
            const response=await axios.post('http://localhost:2000/dashboard/upload-file',Data,
               {headers: {'Content-Type':'multipart/form-data'}});
                setMessage('upload successful');
    //            dispatch(addNewItem({name:file.name,path:`certusMealServer/files/${file.name}`}))
        }
        catch(e){
            if(!e.response){alert('An unkown error occured...`')}
            if(e.response.status===500){
                setMessage('A problem occured with the server');
            }
            else{
                setMessage(e.response.data.msg);
            }
        }
    }


return(
    <form>
            <DivElement clas={'rowItem bg-green-500 rounded-[8px] mt-2 mb-2'}>
                    <form onSubmit={onSubmit}>
                        <input type="file" onChange={onChange} className="uploadBtn bg-green-700" />
                        <input type="submit" onClick={onSubmit} className="doneBtn" value={'Done'}/>     
                        </form>
                        {(message!==undefined && message!==true) && alert(message)}
                    </DivElement>
    </form>
)
  };


