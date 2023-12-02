import React from 'react'
import Header from '../components/Header'
import { useMyContext } from '../context/context';
import { Button, Card, Col, Row } from 'react-bootstrap';

function Wish() {
    const { wish,addToCart, cart ,removeFromWish} = useMyContext();
    const handleAddToCart = (product) => {
        addToCart(product);
        console.log(cart);
      };
  return (
    <>
    <Header/>
    <div className='container-fluid'>
    <Row className="ms-5" style={{ marginTop: '100px' }}>
        {wish && wish.length > 0
          ? wish.map((product, index) => (
              <Col key={index} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', height: '25rem' }}>
                  <Card.Img style={{ height: '200px' }} variant="top" src={product?.image} />
                  <Card.Body style={{ overflowY: 'hidden' }}>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                      <h6>${product?.price}</h6>
                    </Card.Text>
                    <div className='d-flex pb-5 '>
                      <Button onClick={() => removeFromWish(product)} style={{ backgroundColor: 'transparent', border: 'none' }} className='btn p-0 me-3'>
                        <i className="fs-5 fa-solid fa-heart-crack ms-1" style={{ color: '#ff0000' }}></i>
                      </Button>
                      <Button  onClick={() => handleAddToCart(product)} style={{ backgroundColor: 'transparent', border: 'none' }} className='btn p-0'>
                        <i  className="fs-5 fa-solid fa-cart-plus ms-1" style={{ color: '#000000' }}></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : <p className='my-5 text-danger text-center fs-4'>WishList empty</p>}
      </Row>

    </div>
    </>
  )
}

export default Wish