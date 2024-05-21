import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateCart } from '../../redux/actions/cart';

export default function Qty({qty,sku}) {
    const [quantity, setQuantity] = useState(qty)
    const dispatch = useDispatch();
    const handleUpdate = ()=>{
        dispatch(updateCart({quantity,sku}))
    }
    const tang = ()=>{
        setQuantity(quantity+1);
        dispatch(updateCart({quantity,sku}));
    }
    useEffect(()=>{
        setQuantity(qty)
    },[qty])
  return (
    <>
            <div className='d-flex'>
                    <button onClick={tang}>-</button><span><input onChange={(e)=>{setQuantity(e.target.value)}} onBlur={handleUpdate} type="text" value={quantity}/></span><button>+</button>
                </div>
    </>
  )
}
