import React, {useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import './Navigation.scss'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {UserContext} from "../../context/user-context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CardIcon from "../../componets/card-icon/CardIcon";
import CardDropdown from "../../componets/card-dropdown/CardDropdown";
import {CartContext} from "../../context/cart-context";

const Navigation = () => {

    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)



    return (
        <>
            <div className={'navigation'}>
                <Link className={'logo-container'} to={'/'}>
                    <CrownLogo className={'logo'}/>
                </Link>

                <div className={'nav-links-container'}>
                    <Link className={'nav-link'} to={'/shop'}>
                           SHOP
                    </Link>
                    {currentUser ? (
                        <span onClick={signOutUser} className={'nav-link'}>SIGN OUT</span>
                    ): (
                        <Link className={'sing-in'} to={'/auth'}>
                            SIGN IN
                        </Link>
                    )
                    }
                    <CardIcon/>

                </div>
                {isCartOpen && <CardDropdown/>}
            </div>
            <Outlet/>
        </>
    );
};

export default Navigation;
