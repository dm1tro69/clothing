import React, {useContext, useState} from 'react';
import {
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import './SignInForm.scss'
import Button from "../button/Button";
import {UserContext} from "../../context/user-context";

const defaultFormField = {
    email: '',
    password: '',

}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField)
    const {email, password} = formFields

    const {setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }


    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()


        try {
             const {user} = await signInAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user)
            resetFormFields()
        }catch (e) {
            switch (e.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break
                default:  console.log(e.message)
            }

            }

        }





    const handleChange = (e) => {
        const {name, value} = e.target
         setFormFields({...formFields,[name]: value})

    }

    return (
        <div className={'sign-up-container'}>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} onChange={handleChange} value={email} name={'email'} required type="email"/>
                <FormInput label={'Password'} onChange={handleChange} value={password} name={'password'} required type="password"/>
                  <div className={'buttons-container'}>
                      <Button type={'submit'}>Sign In</Button>
                      <Button type={'button'} buttonType={'google'} onClick={signInWithGoogle}>Google sign In</Button>
                  </div>


            </form>
        </div>
    )
};

export default SignInForm;
