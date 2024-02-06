import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Baga from './Baga';
import Shop from './Shop';
import Meat from './Meat';
import Dairy from './Dairy';
import AllCtas from './AllCtas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<h1>please select waga or samp</h1>} />
                    <Route path="/samp" element={<h1>waga baga</h1>} />
                    <Route path="/waga" element={<Baga />} />
                    <Route path="/shop" element={<Shop />} >
                        <Route path="/shop/meat" element={<Meat />} />
                        <Route path="/shop/dairy" element={<Dairy />} />
                        <Route path="/shop/allcats/:id" element={<AllCtas/>}/> 
                    </Route>
                    
                </Route>
                <Route path="*" element={<h1>u lost...</h1>}></Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);


// install
// npm install react-router-dom@6
