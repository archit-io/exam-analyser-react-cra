import React, { Component, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from "react-router-dom";


  

function RegisteredSuccessfully() {
    
    return (
            <div class="container" >
                <div class="row">
                    <div class="col-md-6">
                        
                    <h1 class="box" style={{backgroundColor:"#d5ded5", fontSize:"5rem"}}>You have registered successfully!</h1>

                    <Link to="/login">
                        <Button variant="warning" size="lg" block>
                            Log in
                        </Button>
                    </Link>
                        
                    </div>
                </div>
            </div>
        );
    
}

export default RegisteredSuccessfully;
