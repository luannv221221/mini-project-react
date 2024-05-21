import React, { useEffect, useState } from 'react'
import Banner from '../layouts/Banner'
import Product from '../layouts/Product'
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProductAPI();
    },[]);
    const getProductAPI = ()=>{
        axios.get('http://localhost:8080/api.myservice.com/v1/admin/products').
        then((res)=>{
            setProducts(res.data.duLieu);
        }).catch(err=>console.log(err));
    }
  return (
    <>
      <Banner></Banner>
      <Product title={'Sản phẩm bán chạy'} products={products}></Product>
      <Product title={'Sản phẩm mới'} products={products}></Product>
    </>

  )
}
