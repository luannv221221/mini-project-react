import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';

export default function ListProduct({products}) {
    const cart = useSelector((state)=>{
        return state.cart;
    })
    // console.log(cart);
    const dispatch = useDispatch();

    const handleAddCart = (product)=>{
        dispatch(addToCart(product))
        
    }
  return (
    <><Row>
        {products.map((item,index)=>{
            return (
                <Col lg={4} key={index}>
                    <div className="card">
                        <img className="card-img-top" style={{maxHeight:450}} src={item.image} alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">{item.productName}</h4>
                            <p className="card-text">{item.unitPrice}</p>
                        </div>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={()=>{handleAddCart(item)}}
                        >
                            ADD Cart
                        </button>
                        
                    </div>
                     
                </Col>
          );
        })}
        </Row>
    </>
  )
}
