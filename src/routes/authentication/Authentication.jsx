import React from 'react';
import SignUpForm from "../../componets/sign-up-form/SignUpForm";
import SignInForm from "../../componets/sign-in-form/SignInForm";
import './Authenticaton.scss'

const Authentication = () => {

    return (
        <div className={'authentication-container'}>
            <SignInForm/>
            <SignUpForm/>

        </div>
    );
};

export default Authentication;
