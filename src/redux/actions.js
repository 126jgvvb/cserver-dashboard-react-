
export const setProperty=(property,value)=>({
    type:'Navigation',
    property1:'tabConfig.title',
    property2:'dynamicDiv.title',
    value:value
})

export const setObject=(newState)=>({
    type:'NewState',
    layoutObj:newState
})

export const delExcelFile=(fileName)=>({
    type:'delete',
    name:fileName
})

export const delAdminFile=(fileName)=>({
    type:'delete-admin-files',
    name:fileName
})

export const addNewItem=(itemObj)=>({
    type:'new-item',
    name:itemObj.name,
    path:itemObj.path,
    date:((new Date()).getDate()+"-"+(new Date()).getMonth()+"-"+(new Date()).getFullYear())
})

export const file_in_view=(filepath)=>({
    type:'viewing',
    path:filepath
})

export const return_search_results=(filename)=>({
    type:"filter1",
    fileName:filename
})