import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

function ShippingScreen({ location, history }) {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type='address'
                    placeholder='Enter address'
                    value={address ? address : ''}
                    onChange={(e) => setAddress(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type='city'
                    placeholder='Enter city'
                    value={city ? city : ''}
                    onChange={(e) => setCity(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type='postalCode'
                    placeholder='Enter postal code'
                    value={postalCode ? postalCode : ''}
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type='country'
                    placeholder='Enter country'
                    value={country ? country : ''}
                    onChange={(e) => setCountry(e.target.value)}
                  ></Form.Control>
                    <Button type='submit' variant='primary'>
                        Continue
                    </Button>
                </Form.Group>


            </Form>
        </FormContainer>

    );
}

export default ShippingScreen;
