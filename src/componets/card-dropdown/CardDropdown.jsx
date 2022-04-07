import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import './CardDropdown.scss'
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {CartContext} from "../../context/cart-context";

const CardDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
         navigate('/checkout')
    }

    return (
        <div className={'cart-dropdown-container'}>
            <div className={'cart-items'}>
                {cartItems.map((item)=> (
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CardDropdown;
