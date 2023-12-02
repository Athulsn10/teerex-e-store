import React from 'react'
import Header from '../components/Header'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useMyContext } from '../context/context';

function Cart() {
    const { cart,removeFromCart } = useMyContext();
  return (
    <>
    <Header/>

    <div className='container-fluid'>
    <Row className="ms-5" style={{ marginTop: '100px' }}>
        {cart && cart.length > 0
          ? cart.map((product, index) => (
              <Col key={index} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', height: '25rem' }}>
                  <Card.Img style={{ height: '200px' }} variant="top" src={product?.image} />
                  <Card.Body style={{ overflowY: 'hidden' }}>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                      <h6>${product?.price}</h6>
                    </Card.Text>
                    <div className='d-flex pb-5 '>
                      <Button  style={{ backgroundColor: 'transparent', border: 'none' }} className='btn p-0 me-3'>
                        <i className="fs-5 fa-solid fa-heart ms-1" style={{ color: '#ff0000' }}></i>
                      </Button>
                      <Button onClick={() => removeFromCart(product)} style={{ backgroundColor: 'transparent', border: 'none' }} className='btn p-0 me-3'>
                        <i className="fs-5 fa-solid fa-xmark ms-1" style={{ color: '#ff1f1f' }}></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : <p className='my-5 text-danger text-center fs-4'>Cart empty</p>}
      </Row>

    </div>
    </>
  )
}

export default Cart