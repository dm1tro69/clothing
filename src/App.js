import React from 'react';
import Home from "./routes/home/Home";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";



const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Navigation/>}>
                <Route index element={<Home/>}/>
            </Route>

        </Routes>
    );
};

export default App;
