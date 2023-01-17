import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../Globalcomponents/ThemeProvider';
import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './product-details.css';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { commentForm } from '../components/CommentsForm';


const ProductDetails = (props) => {
    


    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const [productData, setProductData] = useState([]);
    //const [productdeData, setProductdeData] = useState([]);

    useEffect(() => {
        getResponse();
    }, []);

    const getResponse = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${props.productId}`)
            .then(res => res.json());
            setProductData(await res);
    }


    /*useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://127.0.0.1:8000/shop/list/', {
                method: "GET",
            })
            const responseData = await response.json()
            setProductData(responseData)
        }
        //console.log(productData)
        sendRequest();
    }, []);*/


    ///////COMMENTS//////
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const onChangeHandler = (e) => {
        setComment(e.target.value)
    };
    const onClickHandler = () => {
        setComments((comments) => [...comments, comment])
    }


    return (
        <Container className="py-5">
            <Row className="justify-content-center mt-5">
                <Col xs={10} md={7} lg={5} className="p-0">
                    <Lightbox
                        images={[
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 1'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 2'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 3'
                            },
                            {
                                src: productData.image,
                                title: productData.title,
                                description: 'img 4'
                            }
                        ]}
                    />
                </Col>
                <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`}>
                    <h1 style={{ textAlign: "center" }}>{productData.title}</h1>

                    <br />

                    <b style={{ textAlign: "center" }} className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
                        قیمت: {productData.price}   تومان
                    </b>

                    <br />



                    <p className="mt-3 h5" style={{ opacity: '0.8', fontWeight: '400', textAlign: "center" }}>
                        {productData.description}
                    </p>

                    <br />

                    <b className="h5">4.1 ⭐</b>
                    <br />
                    <br />
                    <Button
                        onClick={() => addItem(productData)}
                        className={theme ? 'bg-dark-primary text-black' : 'bg-light-primary'}
                        style={{ borderRadius: '8px', border: 0, fontFamily: "Yekan" }}
                    >
                        <BsCartPlus size="1.8rem" />
                        افزودن به سبد خرید
                    </Button>



                </Col>
            </Row>
            <div className='main-container'>
                <div className='comment-flexbox'>
                    <h3 className='comment-text'>نظرات کاربران</h3>
                    <textarea
                        className='input-box'
                        value={comment}
                        onChange={onChangeHandler}
                    />
                    <button onClick={onClickHandler} className='comment-button'>ثبت</button>
                    {comments.map((text) => (
                        <div className='comment-container'>{text}</div>
                    ))}
                </div>
            </div>
        </Container>


    );

};

export default ProductDetails;