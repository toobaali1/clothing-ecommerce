import React from "react";
import "./sign-in.styles.scss";

class SignIn extends React.Component{
    constructor(){
        super();

        this.state= {
            email: "",
            password: ""
        }

        this.handleSubmit = (e)=>{
           e.preventDefault();
           this.setState({
               email: "",
               password: ""
           });
        }

        this.handleChange = (e)=>{
            const {name,value} = e.target;
            this.setState({[name]:value});
        }
    } //contructor ends

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account!</h2>
                <span>Sign In with Email and Password</span>

                <form>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} onSubmit={this.handleSubmit} required/>
                    <label>Email</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} onSubmit={this.handleSubmit}  required/>
                    <label>Password</label>
                    <input type="submit" />

                </form>
            </div>
        );
    }
}//class ends

export default SignIn;