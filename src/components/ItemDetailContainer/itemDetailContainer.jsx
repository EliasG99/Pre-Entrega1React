
import Card from 'react-bootstrap/Card';
import {Link, useParams} from "react-router-dom"
import { ProductData } from '../../json/ProductData';
const ItemDetailContainer = () => {
    const {productId} = useParams();
    const productFiltered = ProductData.filter((item) => item.id === parseInt(productId));
    
  return (
    <div>
      {productFiltered.map((item) => 
        <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
    </Card>
    )}
    </div>
  );
};

export default ItemDetailContainer;