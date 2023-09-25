import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({product}) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.descripcion}
            </Card.Text>
            <Card.Text>
              {product.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
}

export default Cards
