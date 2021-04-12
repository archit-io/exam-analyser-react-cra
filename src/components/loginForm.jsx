import React, { Component, useRef, useState } from 'react';
import {Alert} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylesLogin.css';
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";


  
const initialValues = {
    email: "",
    password: ""    
    };

const validationSchema = yup.object().shape({
        email: yup
        .string()
        .email()
        .required("Email is a required field"),
        password: yup
        .string()
        .required("Please enter your password")
        // .matches(
        // /^.*(?=.{8,100})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        // null)
    });

function LoginForm({ onSubmit }) {
    //using useFormik
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    //use formik.getFieldProps for input fields
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps("password");
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/tools")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
  }
    
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        
                            <form class="box" onSubmit={handleSubmit}>
                                <h1>Login</h1>
                                <p class="text-muted"> Please enter your login and password!</p> 
                                {error && <Alert variant="danger">{error}</Alert>}
                                <input 
                                    type="text" 
                                    id="email"
                                    name="email" 
                                    label="email" 
                                    placeholder="Email"
                                    ref={emailRef}
                                    {...formik.getFieldProps('email')} 
                                />
                                {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null} 
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password" 
                                    label="Password" 
                                    placeholder="Password" 
                                    ref={passwordRef}
                                    {...formik.getFieldProps('password')}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null} 
                                <a class="forgot text-muted" href="#">Forgot password?</a> 
                                <input 
                                    type="submit" 
                                    name="" 
                                    value="Login" 
                                    // href="#" 
                                    disabled={loading}
                                />
                                {/* <div class="col-md-12">
                                    <ul class="social-network social-circle">
                                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a>
                                        </li>
                                    </ul>
                                </div> */}
                            </form>
                        
                    </div>
                </div>
            </div>
        );
    
}

export default LoginForm;
