import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Product from "../Components/Product.js";
import {Row, Col} from "react-bootstrap";
import {listProducts} from "../Actions/productActions.js";
import Message from "../Components/Message.js";
import Loader from "../Components/Loader.js";

const HomeScreen = () => {
    const dispatch=useDispatch();

    const  productList=useSelector(state=>state.productList);
    const {loading, error, products}=productList;

    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader />:error?<Message variant="danger">{error}</Message>:
                <Row>
                {
                    products.map((product)=>(
                        <Col key={product._id} sm={12} lg={4} md={6} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
            }
            
        </>
    )
}

export default HomeScreen
