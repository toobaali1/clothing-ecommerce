import React from "react";
import "./sign-in.styles.scss";
import Input from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";

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

                <form onSubmit={this.handleSubmit}>
                    <Input type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <Input type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                        
                    {/* <input type="submit" /> */}
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}//class ends

export default SignIn;