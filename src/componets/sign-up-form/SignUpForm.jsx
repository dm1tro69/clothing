import React, {useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import './SignUpForm.scss'
import Button from "../button/Button";

const defaultFormField = {
     displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField)
    const {displayName, email, password, confirmPassword} = formFields


    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword){
            alert('passwords do not match')
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()


        }catch (e) {
            if (e.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email in use')
            }else {
                console.log('user creation encountered an error',e.message)
            }

        }

    }



    const handleChange = (e) => {
        const {name, value} = e.target
         setFormFields({...formFields,[name]: value})

    }

    return (
        <div className={'sign-up-container'}>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} onChange={handleChange} value={displayName} name={'displayName'} required type="text"/>
                <FormInput label={'Email'} onChange={handleChange} value={email} name={'email'} required type="email"/>
                <FormInput label={'Password'} onChange={handleChange} value={password} name={'password'} required type="password"/>
                <FormInput label={'Confirm Password'} onChange={handleChange} value={confirmPassword} name={'confirmPassword'} required type="password"/>

                <Button type={'submit'}>Sign Up</Button>

            </form>
        </div>
    )
};

export default SignUpForm;
