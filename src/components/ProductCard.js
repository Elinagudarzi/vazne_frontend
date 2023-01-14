import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../Globalcomponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus, BsInfoCircle } from 'react-icons/bs';
import { Link } from "@reach/router";



const ProductCard = (props) => {
    let { images, Unit_price, product_name, id } = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props.data);
    }
    return (
        <Card
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme ? 'bg-light-black text-light' : 'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div style={{
                    background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                    justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit'
                }}>
                    <div style={{ width: '9rem' }}>
                        <Card.Img variant="top" src={images} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body className=''>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {product_name}
                </Card.Title>
                <Card.Title>
                     <span className="h3">{Unit_price}</span> 
                </Card.Title>
                <Button
                    onClick={() => addToCart()}
                    className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} d-flex align-item-center m-auto border-0`}
                >
                    <BsCartPlus size="1.8rem" />
                    افزودن به سبد خرید
                </Button>


                <Button href={`/product-details/${id}`} style={{ padding: "7px 21px 7px 21px", border: "0px", marginTop: "5px", backgroundColor: "#191659" }} >
                    <BsInfoCircle size="1.3rem" style={{ marginRight: "10px" }} />
                    جزيیات محصول
                </Button>

            </Card.Body>
        </Card>
    );
};

export default ProductCard;