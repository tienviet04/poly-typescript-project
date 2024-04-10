import { IProducts } from "../interface";
import instance from "./instance";

export const getAll=()=>{
    const uri = "products"
    return instance.get(uri)
}
export const getDetail=(id:string|number)=>{
    const uri = "products/" +id
    return instance.get(uri)
}
export const postPrd=(data:IProducts)=>{
    const uri = "products"
    return instance.post(uri,data)
}
export const putProduct = (id: number | string, data: IProducts) => {
    const uri = "products/" + id
    return instance.put(uri, data)
}
export const deletePrd=( id:string|number)=>{
    const uri = "products/" + id
    return instance.delete(uri)
}