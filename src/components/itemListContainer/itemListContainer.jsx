
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
const itemListContainer = ({ ProductData }) => {
  return (
    <div>
    {ProductData.map((item) =>{
      return (
        <Card style={{ width: '18rem' }} key={item.id}>
      <Card.Img variant="top" src={item.pictureUrl} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Link to={`/item/${item.id}`}>Ir a Detalle</Link>
      </Card.Body>
    </Card>



      )


    })}
    </div>
  );
};

export default itemListContainer;