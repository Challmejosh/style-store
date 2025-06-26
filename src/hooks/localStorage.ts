export const PersistStorage = (set: "set"|"get"|"delete",key?:string,value?: any)=>{
    if(set==="set"){
        localStorage.setItem(key,JSON.stringify(value))
        return ;
    }else if(set==="get"){
        const getStorage = localStorage.getItem(key)
        const data = JSON.parse(getStorage)
        return data;
    }else if(set==="delete"){
        localStorage.removeItem(key)
    }
}