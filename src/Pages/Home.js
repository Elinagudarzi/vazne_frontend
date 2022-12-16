import React, { useEffect, useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../Globalcomponents/ThemeProvider';
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import ProductCard from '../components/ProductCard';
//import axios from 'axios'

const Home = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');


    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('https://fakestoreapi.com/products',{
                method:'GET',
                mode:'cors',
            })
            const responseData = await response.json()
            setProductData(responseData)
        }
        //console.log(productData)
        sendRequest();
    }, [])


    






    /*'https://vazne.pythonanywhere.com/shop/'*/
    /*'https://fakestoreapi.com/products'*/
    /*'http://127.0.0.1:8000/shop'*/


    /*const [loading, setLoading] = useState(false)
            const [data, setData] = useState(null)
        
            useEffect(() => {
                setLoading(true)
                axios({
                    method: 'GET',
                    baseURL: 'https://vazne.pythonanywhere.com/shop',
                    url: 'https://vazne.pythonanywhere.com/shop',
                  })
                    .then(({ data }) => {
                      setData(data.products)
                    })
                    .catch(err => console.dir(err))
                    .finally(() => setLoading(false))
            }, [])*/






    /*async function getResponse() {
         const result = await fetch('https://vazne.pythonanywhere.com/shop/')
             .then(result => result.json());
         setProductData(await result);
     }
 
     useEffect(() => {
         getResponse();
     }, []);*/

    return (
        <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <h1 style={{fontfamily:'Yekan'}} className={theme ? 'text-light my-5' : 'text-black my-5'}>محصولات وزنه</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="جستجوی محصول"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
                        />
                    </InputGroup>
                </Col>
                <SearchFilter
                    value={searchInput}
                    data={productData}
                    renderResults={results => (
                        <Row className="justify-content-center">
                            {results.map((item, i) => (
                                <ProductCard data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />

            </Row>
        </Container>
    )
}

export default Home