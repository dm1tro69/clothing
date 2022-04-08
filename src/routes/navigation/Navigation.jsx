import React, {useContext} from 'react';
import {Link, Outlet} from "react-router-dom";

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {UserContext} from "../../context/user-context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CardIcon from "../../componets/card-icon/CardIcon";
import CardDropdown from "../../componets/card-dropdown/CardDropdown";
import {CartContext} from "../../context/cart-context";
import {LogoContainer, NavigationContainer, NavLink, NavLinkContainer} from "./Navigation.styles";

const Navigation = () => {

    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)



    return (
        <>
            <NavigationContainer>
                <LogoContainer to={'/'}>
                    <CrownLogo className={'logo'}/>
                </LogoContainer>

                <NavLinkContainer>
                    <NavLink to={'/shop'}>
                           SHOP
                    </NavLink>
                    {currentUser ? (
                        <span onClick={signOutUser} className={'nav-link'}>SIGN OUT</span>
                    ): (
                        <NavLink to={'/auth'}>
                            SIGN IN
                        </NavLink>
                    )
                    }
                    <CardIcon/>

                </NavLinkContainer>
                {isCartOpen && <CardDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </>
    );
};

export default Navigation;
