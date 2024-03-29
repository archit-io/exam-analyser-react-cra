import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylesLogin.css';

class LoginFormAwesome extends Component {
    
    render() { 
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6">                        
                            <form class="box">
                                <h1>Login</h1>
                                <p class="text-muted"> Please enter your login and password!</p> <input type="text" name=""
                                    placeholder="Username"  /> <input type="password" name="" placeholder="Password" /> <a
                                    class="forgot text-muted" href="#">Forgot password?</a> <input type="submit" name=""
                                    value="Login" href="#" />
                                <div class="col-md-12">
                                    <ul class="social-network social-circle">
                                        <li><a href="#" class="icoFacebook" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#" class="icoGoogle" title="Google +"><i class="fab fa-google-plus"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </form>                        
                    </div>
                </div>
            </div>
          );
    }
}
 
export default LoginFormAwesome;