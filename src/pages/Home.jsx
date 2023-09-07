
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { ProductData } from '../json/ProductData';
const Home = ()=> {
     return (
        <ItemListContainer ProductData ={ProductData} />
     )
}
 

export default Home