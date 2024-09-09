/* eslint-disable no-undef */
/* eslint-disable default-case */
//import { DataDownloader } from "../pages/homepage/components/networkData";

export const initialState={
    layoutObj:{
        tabConfig:{
            title:'uploads'
        },
        dynamicDiv:{
            title:'uploads',
            filtered_List:[],
            files:[]
        },
        adminDetails:[],
        behavior:[],
        logchildren:[]
    }
}


export const reducerFunction=(state=initialState,action)=>{
    switch(action.type){
        case 'Navigation':
            return{
            ...state,
                layoutObj:{
                    ...state.layoutObj,
                    tabConfig:{title:action.value},
                    dynamicDiv:{...state.layoutObj.dynamicDiv,title:action.value}
                }
            }

        case'NewState':
   // alert(Object.keys(action.layoutObj.dynamicDiv));
        return{
                ...state,
                layoutObj:{
                    ...state.layoutObj,
                    dynamicDiv:{
                        ...state.layoutObj.dynamicDiv,
                        adminUploads:action.layoutObj.dynamicDiv.adminUploads,
                        files:action.layoutObj.dynamicDiv.files,
                        filtered_List:action.layoutObj.dynamicDiv.adminUploads
                    },
                    adminDetails:action.layoutObj.adminDetails,
                    behavior:action.layoutObj.behavior,
                    logchildren:action.layoutObj.logChildren
                }
            }


            case 'delete':
                return{
                    ...state,
                layoutObj:{
                    ...state.layoutObj,
                    dynamicDiv:{
                        ...state.layoutObj.dynamicDiv,
                        files:state.layoutObj.dynamicDiv.files.filter(fileObj=>(fileObj.name!==action.name)),
                    },
                }   
                }


                case 'delete-admin-files':
                    return{
                        ...state,
                    layoutObj:{
                        ...state.layoutObj,
                        dynamicDiv:{
                            ...state.layoutObj.dynamicDiv,
                            adminUploads:state.layoutObj.dynamicDiv.adminUploads.filter(fileObj=>(fileObj.fileName!==action.name)),
                        },
                    }   
                    }

                    case 'new-item':
                        return{
                            ...state,
                        layoutObj:{
                            ...state.layoutObj,
                            dynamicDiv:{
                                ...state.layoutObj.dynamicDiv,
                                adminUploads:state.layoutObj.dynamicDiv.adminUploads.push({name:action.name,path:path,date:action.date}),
                            },
                        }   
                        }

                    
                        case 'filter1':
                            let initial_array=state.layoutObj.dynamicDiv.filtered_List;
                            return{
                                ...state,
                                layoutObj:{
                                    ...state.layoutObj,
                                    dynamicDiv:{
                                        ...state.layoutObj.dynamicDiv,
                                        adminUploads:initial_array.filter(item=>{return item.fileName.toLowerCase().includes(action.fileName); })
                                    }
                                }
                            }


            // eslint-disable-next-line no-fallthrough
            default:return state;
    }
};
