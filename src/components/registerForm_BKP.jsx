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
        
        name: yup
            .string()
            .required("A name is required")
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name must be at max 100 characters"),
        email: yup
            .string()
            .email()
            .required("Email is a required field"),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
            /^.*(?=.{8,100})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
        confirmPassword: yup
            .string()
            .required("Please confirm your password")
            .when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
            })
    });

function RegisterForm({ onSubmit }) {
    //using useFormik
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    //use formik.getFieldProps for input fields
    //const emailProps = formik.getFieldProps("email");
    const confirmPasswordProps = formik.getFieldProps("confirmPassword");
    

    
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        
                            <form class="box" onSubmit={formik.handleSubmit}>
                                <h1>Register</h1>
                                <p class="text-muted" > Please enter your full name:</p> 
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    label="name" 
                                    placeholder="Full Name"
                                    {...formik.getFieldProps('name')} 
                                />
                                {formik.touched.name && formik.errors.name ? (
                                        <div>{formik.errors.name}</div>
                                    ) : null} 
                                
                                <p class="text-muted"> Please enter your email:</p> 
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
                                <p class="text-muted"> Please enter a password:</p>
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

                                <p class="text-muted"> Please re-enter the password:</p>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password" 
                                    label="Confirm Password" 
                                    placeholder="Confirm Password" 
                                    {...confirmPasswordProps}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div>{formik.errors.confirmPassword}</div>
                                ) : null} 
                                <br></br>
                                {/* CHANGE ATTRIBUTE is and for BELOW */}
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label for="vehicle1"> &nbsp; I agree to receive instructional and promotional emails</label><br></br><br></br>
                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                <label for="vehicle2"> &nbsp; I agree to Tabotot Technology's Terms of Use & Privacy Policy</label><br></br>
                             
                                {/* <a class="forgot text-muted" href="#">Forgot password?</a>  */}
                                <input 
                                    type="submit" 
                                    name="" 
                                    value="Register" 
                                    href="#" 
                                    
                                />

                                <span class="text-muted"> Already Registered?</span><a class="forgot text-muted" href="#">&nbsp;Login</a>
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

export default RegisterForm;
