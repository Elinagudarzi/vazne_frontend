import React from 'react'
import { useState } from 'react';
import ball2 from '../images/ball2.png'
import football from '../images/football.jpg'
import shoes1 from '../images/shoes1.png'
import '../Pages/productPages.css';

class ProductPages extends React.Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": " AX22 کفش کوهنوردی",
                "src": [shoes1],
                "description": "آج دار، کاهش فشار وارده، مقاوم در برابر سایش",
                "content": "پلی اورتان,قابل تعویض,چرم مصنوعی، مواد مصنوعی",
                "price": "130,000.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "shoes"
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    }



    render() {
        const { products, index } = this.state;
        const { comment } = this.state;
        const { setComment } = this.setState;
        
        const onChangeHandler = (e) => {
            setComment(e.target.value);
        };

        return (
            <div className='productDetails'>
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-image">
                                <img src={item.src[index]} alt="" />
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>

                                </div>
                                <div className="colors" >
                                    {
                                        item.colors.map((color, index) => (
                                            <button style={{ background: color }} key={index}></button>
                                        ))
                                    }
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <span style={{ color: "red" }}>{item.price} تومان</span>
                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img, inedx) => (
                                            <img src={img} alt='' key={index}
                                                onClick={() => this.handleTab(index)}
                                            />
                                        ))
                                    }

                                </div>

                                <button className='cart'>اضافه به سبد خرید</button>

                            </div>

                        </div>

                    ))
                }
                <div className=''>
                    <div>{comment}</div>
                    <h3 style={{ marginLeft: "520px" }}>نظرات کاربران</h3>
                    <textarea
                        style={{ marginLeft: "360px", marginTop: "30px", height: "75px", width: "465px" }}
                        value={comment}
                        onChange={onChangeHandler} />

                    <button style={{ marginLeft: "550px", borderRadius: "5px", border: "0px", marginTop: "10px" }}>ارسال نظرات</button>
                </div>
            </div>
        );
    }
}

export default ProductPages;