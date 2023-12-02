// Home.js
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Button, Card, Col, Row, Form } from 'react-bootstrap';
import axios from 'axios';
import { useMyContext } from '../context/context';

function Home() {
 
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, cart, wish, addTowish } = useMyContext();

  const fetchData = () => {
    axios.get('/tshirt.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(cart);
  };

  const handleAddToWish = (product) => {
    addTowish(product);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data ? data.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  return (
    <>
      <Header />
      <div className='mt-5 pt-3 container-fluid'>
        <div className='d-flex justify-content-center'>
            <Form.Group controlId="searchInput" className="mb-4 mt-5 w-50">
              <Form.Control type="text" placeholder="Search Product"  />
            </Form.Group>
        </div>

        <Row className="ms-5" style={{ marginTop: '20px' }}>
          {filteredData && filteredData.length > 0
            ? filteredData.map((product, index) => (
              <Col key={index} className="mb-4" sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem', height: '25rem' }}>
                  <Card.Img style={{ height: '250px' }} variant="top" src={product?.image} />
                  <Card.Body style={{ overflowY: 'hidden' }}>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>
                      <p>{product?.description?.slice(0, 60)}</p>
                      <h6>${product?.price}</h6>
                    </Card.Text>
                    <div className='d-flex pb-5 '>
                      <Button style={{ backgroundColor: 'transparent', border: 'none' }} className='btn p-0 me-3'>
                        <i onClick={() => handleAddToWish(product)} className="fs-5 fa-solid fa-heart ms-1" style={{ color: '#ff0000' }}></i>
                      </Button>
                      <Button style={{ backgroundColor: 'transparent', border: 'none' }} className='btn p-0'>
                        <i onClick={() => handleAddToCart(product)} className="fs-5 fa-solid fa-cart-plus ms-1" style={{ color: '#000000' }}></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            : <p className='my-5 text-danger text-center fs-4'>No matching products found</p>}
        </Row>
      </div>
    </>
  );
}

export default Home;
