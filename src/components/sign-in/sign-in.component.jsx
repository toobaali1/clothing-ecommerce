import React from "react";
import "./sign-in.styles.scss";
import Input from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(){
        super();

        this.state= {
            email: "",
            password: ""
        }

        this.handleSubmit = async(e)=>{
           e.preventDefault();
           const {email,password} = this.state;

           try{
               await auth.signInWithEmailAndPassword(email,password);
                this.setState({
                    email: "",
                    password: ""
                });
        } catch(e){
            alert("Wrong email or Password");
            this.setState({
                email: "",
                password: ""
            });
            // console.log("Error Signing In", e.message);
        }


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
                        
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}//class ends

export default SignIn;