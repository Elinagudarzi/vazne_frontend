import React from 'react'
import shop from '../img/1.jpg'
import football from '../img/ball2.png'
import shoes from '../img/shoe.png'
import dambel from '../img/dumbble.png'
import hoodi from '../img/hodi.png'
import coach from '../img/teach.png'
import blog from '../img/blog.png'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  const { ref, inView } = useInView({
    /*optional options*/
    threshold: 0.4,
  });
  return (
    <>
      <section className="home wrapper-1 py-5">
        <div className="container xxl">
          <div className="row">
            <div className="col-6">
              <div className={inView ? "main-banner main-banner--zoom" : "main-banner"} ref={ref} >
                <div className="main-banner position-reletive p-3" >
                  <div className={inView ? "main-banner__image main-banner__image--zoom" : "main-banner__image"} ref={ref} >
                    <img src={shop}
                      className="main-banner__image"
                      alt="shop"
                    />
                  </div>

                  <div className="main-banner-content position-absplute">
                    <h4> فروشگاه</h4>
                    <h5> خرید آنلاین </h5>
                    <p>خرید انواع لوازم و لباس های ورزشی</p>

                    <Link className='button position-absplute'
                      to='/productPage.js'
                    > ورود به صفحه محصولات </Link>
                  </div>
                </div>
              </div>
            </div>
            <h2 className='shopping'>پرفروش ترین ها</h2>
            <hr />

            <div className="col-3">
              <div className={inView ? "best-seller--image best-seller--image--zoom" : "best-seller--image"} ref={ref} >
                <div className="best-seller--image">
                  <img src={football} height="200" alt="footbal" />
                </div>
                <div className="best-seller-content">
                  <Table>
                    <td>
                      <h4 className='best-seller-content-h4'>  <strong > توپ فوتبال</strong> </h4>
                      <p> <strong > قیمت  </strong>  :  128000تومان </p>
                      <Link className='best-seller-button'
                        to='/cart'>
                        افزودن به سبد خرید
                      </Link>
                    </td>
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className={inView ? "best-seller--image2 best-seller--image2--zoom" : "best-seller--image2"} ref={ref} >
                <div className="best-seller--image2">
                  <img src={shoes} height="200" alt="shoes" />
                </div>

                <div className="best-seller-content2">
                  <Table>
                    <td>
                      <h4 className='best-seller-content-h4'>  <strong >کفش نایک </strong> </h4>
                      <p> <strong > قیمت  </strong>  :  628000تومان </p>
                      <Link className='best-seller-button'
                        to='/cart'>
                        افزودن به سبد خرید
                      </Link>
                    </td>
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className={inView ? "best-seller--image3 best-seller--image3--zoom" : "best-seller--image3"} ref={ref}>
                <div className="best-seller--image3">
                  <img src={dambel} height="120" alt="dambel" />
                </div>

                <div className="best-seller-content3">
                  <Table>
                    <td>
                      <h4 className='best-seller-content-h4'>  <strong > دمبل   </strong> </h4>
                      <p> <strong > قیمت  </strong>  :  228000تومان </p>
                      <Link className='best-seller-button'
                        to='/cart'>
                        افزودن به سبد خرید
                      </Link>
                    </td>
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className={inView ? "best-seller--image4 best-seller--image4--zoom" : "best-seller--image4"} ref={ref}>
                <div className="best-seller--image4">
                  <img src={hoodi} height="170" alt="shirt" />
                </div>

                <div className="best-seller-content4">
                  <Table>
                    <td>
                      <h4 className='best-seller-content-h4'>  <strong > هودی نایک  </strong> </h4>
                      <p> <strong > قیمت  </strong>  :  448000تومان </p>
                      <Link className='best-seller-button'>
                        افزودن به سبد خرید
                      </Link>
                    </td>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container xxl">
          <div className="row">
            <div className="col-6">
              <div className={inView ? "coach-banner coach-banner--zoom" : "coach-banner"} ref={ref}>
                <div className="coach-banner position-reletive p-3" >

                  <img src={coach}
                    className="coach-banner__image"
                    alt="shop"
                    height='400'
                  />

                  <div className="coach-banner-content position-absplute">
                    <h4> مربی آنلاین</h4>
                    <h5>  مسابقات  </h5>
                    <p>   آموزش   </p>

                    <Link className='coach-button position-absplute'
                      to='/coach.jsx'
                    > انتخاب مربی</Link>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container xxl">
          <div className="row">
            <div className="col-6">
              <div className={inView ? "blog-banner blog-banner--zoom" : "blog-banner"} ref={ref}>
                <div className="blog-banner position-reletive p-3" >

                  <img src={blog}
                    className="blog-banner__image"
                    alt="shop"
                    height='300'
                  />

                  <div className="blog-banner-content position-absplute">
                    <h4> بلاگ </h4>
                    <h5>  رشته ها  </h5>
                    <p>   آموزش   </p>
                    <Link className='blog-button position-absplute'
                      to='/blog.jsx'
                    >  مطالعه مطالب</Link>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
