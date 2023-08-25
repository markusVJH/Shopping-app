import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
  const {id, title, category, price, image, rating, description} = props;
  const [showDescription, setShowDescription] = useState(false);

const toggleDescription = () => {
  setShowDescription(!showDescription);
};

  return (
    <Card className="productCard d-flex flex-column h-100">
    <Card.Img variant="top" src={image} alt={title} className="productImage p-3" />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{title}</Card.Title>
      <Card.Text>{price} €</Card.Text>
      {showDescription ? (
          <Card.Text className="flex-grow-1">{description}</Card.Text>
        ) : null}
      <div className="mt-auto">
        <Button variant="link" onClick={toggleDescription}>
          {showDescription ? 'See Less' : 'See More'}
        </Button>
      </div>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  )
}

export default Product;