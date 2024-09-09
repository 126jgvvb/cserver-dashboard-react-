

export const DivElement=({list})=>{
   return (list && <div className="fixedview mt-[70px] md:flex">
      {list.map((item=>
      <div key={item.objectID} className=''>
        {item.id===1 && <label className='first-item '>{item.data}</label>}
        {item.id===2 && <img className='sec-item lg:h-[80%]' src={item.data} alt="image here"/>}
        </div>
        ) )}
        </div>
 )
}


export const DivComponent=({clas,id,children})=>{
if(id!==undefined){
   return(
      <div className={clas} id={id}>
   {children}
</div>
   )
}

return(
<div className={clas}>
   {children}
</div>
)
}


export const GenerateLabels=({array_of_key_value_pairs})=>{
  
   return(
      array_of_key_value_pairs.length>0 && array_of_key_value_pairs.map(
         pair=>{
            if(!pair.value){ 
             return  <label className={pair.clas}>{pair.key}</label>
            }
            else{
            return   <div className={pair.key.divClas}>
               <label className={pair.key.clas}>{pair.key}</label>
               <label className={pair.value.clas}>{pair.value}</label>
               </div>
            }
         }
      )
   )
}