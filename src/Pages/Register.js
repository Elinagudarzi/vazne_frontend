import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Spinner, InputGroup } from 'react-bootstrap';
import { useThemeHook } from '../Globalcomponents/ThemeProvider';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import { Link } from '@reach/router';

const Register = () => {
    const [loading, setLoading] = useState(false);
    const [number, setNumber] = useState(null);
    const [theme] = useThemeHook();


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        const email = form.email.value;

        if (username && password  && email && number) {
            setLoading(true);
            alert("با موفقیت ثبت نام شدید")
            console.log('call api here');
            console.log(username, password,  email, number);
        }
    }
    return (
        <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme ? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme ? 'text-dark-primary' : 'text-light-primary'}`}>
                        ثبت نام در وزنه
                    </h1>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group className="mb-3">
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control name="email" type="email" placeholder="ایمیل" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>نام کاربری</Form.Label>
                            <Form.Control name="username" type="text" placeholder="نام کاربری" minLength={3} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>تلفن همراه</Form.Label>
                            <PhoneInput
                                country={'ir'}
                                value={number}
                                onChange={phone => setNumber(phone)}
                                className="text-dark"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control name="password" type="password" placeholder="رمز عبور" minLength={6} required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className={`${theme ? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{ border: 0 }}
                        >
                            {loading ?
                                <>
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    &nbsp;منتظر بمانید...
                                </> : 'ثبت نام'
                            }
                        </Button>

                        <Form.Group className="mt-3 text-center">
                            <Form.Text className="text-muted fw-bold">
                                آیا در وزنه اکانت دارید؟
                            </Form.Text>
                            <Row className="py-2 border-bottom mb-3"/>
                            <Link to='/signin'  style={{color:"black",fontFamily:"Yekan"}}>
                                 وارد شوید
                            </Link>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;