import React from 'react'
import { Col, Container } from 'react-bootstrap'
import ListProduct from '../elements/ListProduct'

export default function Product({title,link,products}) {
  return (
    <>
        <Container>
            <div className='d-flex justify-content-between'>
            <p>{title}</p>
            <a className='text-danger'>xem theem</a>
            </div>
            <ListProduct products={products}></ListProduct>
        </Container>
        
    </>
  )
}
