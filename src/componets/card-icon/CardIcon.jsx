import React, {useContext} from 'react';
import './CardIcon.scss'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CartContext} from "../../context/cart-context";

const CardIcon = () => {

    const {setIsCartOpen, isCartOpen} = useContext(CartContext)
    const {cartCount} = useContext(CartContext)

    return (
        <div className={'cart-icon-container'} onClick={()=>setIsCartOpen(!isCartOpen)}>
             <ShoppingIcon className={'shopping-icon'}/>
            <span className={'item-count'}>{cartCount}</span>
        </div>
    );
};

export default CardIcon;
