/* import './Product.css' */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
  const {id, title, category, price, image, rating, description} = props;

  return (
    <Card className="productCard d-flex flex-column h-100">
    <Card.Img variant="top" src={image} alt={title} className="productImage p-3" />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{title}</Card.Title>
      <Card.Text className="flex-grow-1">{description}</Card.Text>
      <Card.Text>{price} €</Card.Text>
      <Button variant="primary">Add to cart</Button>
    </Card.Body>
  </Card>
  )
}

export default Product;