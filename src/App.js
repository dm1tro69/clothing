import React from 'react';
import Home from "./routes/home/Home";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import Checkout from "./routes/checkout/CheckOut";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path={'auth'} element={<Authentication/>}/>
                <Route path={'shop/*'} element={<Shop/>}/>
                <Route path={'checkout'} element={<Checkout/>}/>
            </Route>

        </Routes>
    );
};

export default App;
