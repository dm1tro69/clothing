import React, {useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import './Navigation.scss'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {UserContext} from "../../context/user-context";
import {signOutUser} from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

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
                        <span onClick={signOutHandler} className={'nav-link'}>SIGN OUT</span>
                    ): (
                        <Link className={'sing-in'} to={'/auth'}>
                            SIGN IN
                        </Link>
                    )
                    }

                </div>
            </div>
            <Outlet/>
        </>
    );
};

export default Navigation;
