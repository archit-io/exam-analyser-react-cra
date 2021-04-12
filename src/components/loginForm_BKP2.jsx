import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylesLogin.css';
import { useFormik } from "formik";
import * as yup from "yup";


  
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
        .matches(
        /^.*(?=.{8,100})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character")
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
    

    
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        
                            <form class="box" onSubmit={formik.handleSubmit}>
                                <h1>Login</h1>
                                <p class="text-muted"> Please enter your login and password!</p> 
                                <input 
                                    type="text" 
                                    id="email"
                                    name="email" 
                                    label="email" 
                                    placeholder="Email"
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
                                    href="#" 
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
