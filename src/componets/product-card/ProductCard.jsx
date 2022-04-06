import React, {useContext} from 'react';
import './ProductCard.scss'
import Button from "../button/Button";
import {CartContext} from "../../context/cart-context";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const {addItemToCart} = useContext(CartContext)
    return (
        <div className={'product-card-container'}>
            <img src={imageUrl} alt="img"/>
            <div className={'footer'}>
                <span className={'name'}>{name}</span>
                <span className={'price'}>{price}</span>
            </div>
            <Button onClick={()=>addItemToCart(product)} buttonType={'inverted'}>ADD TO CARD</Button>
        </div>
    );
};

export default ProductCard;
