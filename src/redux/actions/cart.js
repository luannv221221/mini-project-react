export const addToCart = (product)=>{
    return {
        type:'ADD_CART',
        payload:product
    }
}

export const updateCart = (data)=>{
    return{
        type:'UPDATE_CART',
        payload:data
    }
}
export const deleteCart = (sku)=>{
    return{
        type:'DELETE_CART',
        payload:sku
    }
}