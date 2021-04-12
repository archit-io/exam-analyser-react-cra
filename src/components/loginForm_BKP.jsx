import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/stylesLogin.css';

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (        
            <div class="container">
                <div class="row">
                    <div class="col-md-6">                        
                            <form class="box">
                                <h1>Login</h1>
                                <label class="text-muted" htmlFor="username"> Please enter your username and password!</label> <input type="text" name="username" id="username" value={this.state.data.username} label="Username" onChange={this.handleChange} error={this.state.errors.username}
                                    placeholder="Username"  /> {this.state.errors.username && <div className="alert alert-danger">{this.state.errors.username}</div>} <input type="password" name="password" id="password" value={this.state.data.password} label="Password" onChange={this.handleChange} error={this.state.errors.password} placeholder="Password" /> {this.state.errors.password && <div className="alert alert-danger">{this.state.errors.password}</div>} <a
                                    class="forgot text-muted" href="#">Forgot password?</a> <input type="submit" name="" value="Login" href="#" />
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

export default LoginForm;
