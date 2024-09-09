import React from "react";
import {MagnifyingGlass} from 'phosphor-react';

export function SearchElement({input,magnifier,divClas,change,onSubmit,children}){
  if(!change) return; 
  return(
        <div className={divClas}>
        <form onSubmit={onSubmit}>
          {children}
          <input type='text' className={input.clas} placeholder={input.placeholder} onChange={(Event)=>change(Event)}/>
      {/*<MagnifyingGlass className={magnifier.clas} size={22} color="white"/>
 */} </form>
        </div>
      )
    }
    
