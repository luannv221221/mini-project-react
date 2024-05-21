import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, updateCart } from '../../redux/actions/cart';
import Qty from './Qty';

export default function MiniCart() {
    
    const dispatch = useDispatch();
    const carts = useSelector((state)=>{
        return state.cart;
    })
    const removeCartItem = (sku)=>{
        dispatch(deleteCart(sku))
    }
  return (
    <>
    <div className="card mb-3" style={{maxWidth:540}}>
        {carts.map((item)=>{
            return (<div className="row g-0" key={item.product.sku}>
            <div className="col-md-4 p-5">
            <img src={item.product.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">Tên : {item.product.productName}</h5>
                <p className="card-text">Giá : {item.product.unitPrice}</p>
                <Qty qty={item.quantity} sku={item.product.sku}></Qty>
                <a className='text-danger'onClick={()=>{removeCartItem(item.product.sku)}} >Xóa bỏ {item.quantity}</a>
            </div>
            </div>
        </div>)
        })}
        
    </div>
    </>
  )
}
