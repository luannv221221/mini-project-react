const carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];

export const cartReducer = (state = carts,action)=>{
    switch (action.type) {
        case "ADD_CART":
            // check sp co chưa 
            const check = state.find((item)=>item.product.sku === action.payload.sku);
            console.log(check);
            let cart = state;
            if(check){
                cart = state.map((item)=>{
                    if(item.product.sku === action.payload.sku){
                        return {...item,quantity:item.quantity+1}
                    } else{
                        return item;
                    }
                })
            } else{
                cart = [...state,{product:action.payload,quantity:1}];
            }
            console.log(cart);
            localStorage.setItem("carts",JSON.stringify(cart));
            return cart;
        case "UPDATE_CART":
            let cartUpdate = state;
            cartUpdate = state.map((item)=>{
                if(item.product.sku === action.payload.sku){
                    return {...item,quantity:action.payload.quantity}
                } else{
                    return item;
                }
            })
            localStorage.setItem("carts",JSON.stringify(cartUpdate));
            return cartUpdate;
        case "DELETE_CART":
            let cartDelete = state;
            cartDelete = state.filter((item)=>{
                if(!item.product.sku === action.payload.sku){
                    return item;
                }
            })
            localStorage.setItem("carts",JSON.stringify(cartDelete));
            return cartDelete;
        default:
            return state;
    }

}