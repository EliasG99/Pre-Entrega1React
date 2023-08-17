import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/itemListContainer/itemListContainer';


const App = () => {






   return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting="¡Bienvenido a Tiendum!" />
     
    </div>
   )
}


export default App