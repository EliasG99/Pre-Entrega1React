 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavbarComponent from '../components/NavBarComponent/NavBarComponent';
import Category from "../pages/Category";
import ItemDetailContainer from "../components/ItemDetailContainer/itemDetailContainer";
 const MainRouter = () => {
    return (
        <BrowserRouter> 
        <NavbarComponent/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />}/>
                <Route path="/item/:productId" element={<ItemDetailContainer />}/>
            </Routes>
        </BrowserRouter>
    )
 } 

 export default MainRouter