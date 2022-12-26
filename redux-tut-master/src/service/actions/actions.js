import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'
export const addToCart =(data)=>{
    // console.warn("action",data)
    return {
        // type k ander define krte h ki kiska data aa rha h yha p add to card ka data aa rha h
        type:ADD_TO_CART, 
        data:data
    }
}

export const removeToCart =()=>{
    // console.warn("action",data)
    return {
        // type k ander define krte h ki kiska data aa rha h yha p add to card ka data aa rha h
        type:REMOVE_TO_CART, 
    
    }
}
