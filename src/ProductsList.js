import axios from "axios";
import Product from "./Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const api = "https://fakestoreapi.com/products/";

const {data: products} = await axios.get(api)

const ProductsList= () => {

  console.log(products);

  return (

    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
  }


export default ProductsList;