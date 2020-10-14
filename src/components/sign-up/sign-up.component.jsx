import React from "react";
import "./sign-up.styles.scss";
import InputField from "../input-field/input-field.component"
import CustomButton from "../custom-button/custom-button.component";
import {auth,createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }

        this.handleSubmit = async (e) =>{
            e.preventDefault();
            const {displayName,email,password,confirmPassword} = this.state;

            if(password !== confirmPassword){
                alert("Passwords do not match!");
                return;
            }

            try{
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName:displayName});

                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""    
                });

            } catch(e){
                console.log("Error creating user", e.message);
            }


}
        
    this.handleChange = (e) => {
            const {name, value} = e.target;
            this.setState({[name]: value});
        }
    }
    render(){
        return(<div className="sign-up">
        <h2 className="title">I do not have an account!</h2>
        <span>Sign Up with Email and Password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <InputField name="displayName"
        type="text"
        value={this.state.displayName}
        label="Display Name"
        onChange={this.handleChange}
        required
        />

        <InputField name="email"
        type="email"
        value={this.state.email}
        label="Email"
        onChange={this.handleChange}
        required
        />

        <InputField name="password"
        type="password"
        value={this.state.password}
        label="Password"
        onChange={this.handleChange}
        required
        />
        
        <InputField name="confirmPassword"
        type="password"
        value={this.state.confirmPassword}
        label="Confirm Password"
        onChange={this.handleChange}
        required
        />

        <CustomButton type="submit">Sign Up</CustomButton>

        
        </form>
    </div>);
    }
   
}

export default SignUp;