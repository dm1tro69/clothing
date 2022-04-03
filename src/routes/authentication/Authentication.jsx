import React from 'react';
import {signInWithGooglePopup, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../componets/sign-up-form/SignUpForm";
import SignInForm from "../../componets/sign-in-form/SignInForm";

const Authentication = () => {




    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInForm/>
            <SignUpForm/>

        </div>
    );
};

export default Authentication;
