import React from 'react'
import './Signup.css';
var UsersDetails=[];
class Signup extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         fullName:'',
         username:'',
         email:'',
         password:'',
         confirm_password:''
      }
    }
    handleChange=(event)=>{
        event.preventDefault();
         this.setState({[event.target.name]:event.target.value});
        // console.log(this.state.carName,this.state.imgUrl,this.state.rent);
     }
      handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.password===this.state.confirm_password)
        {
            UsersDetails.push(this.state)
            // console.log(UsersDetails)
            //localStorage.removeItem("UsersDetails");
            localStorage.setItem("UsersDetails",JSON.stringify(UsersDetails));
            alert('Register Successfully')
        }
        else
        {
            alert('Password not Match')
        }
       
     }
    
    render(){
        return (
            <div>
                <div className="signup-form" style={{ marginTop: "100px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <div><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{ height: "60px", marginLeft: "120px" }}></img><span><h2 className="text-center">Sign Up</h2></span></div>
    
                        <p className="text-center">Please fill in this form to create an account!</p>
                        <hr></hr>
                        <div className="form-group ">
                            <div className="input-group ">
                                <span className="input-group-addon"><i class="fa fa-user"></i></span>
                                <input type="text" class="form-control" name="fullName" value={this.state.fullName} onChange={(e)=>this.handleChange(e)} placeholder="Full Name" required="required" />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="input-group ">
                                <span className="input-group-addon"><i class="fa fa-user"></i></span>
                                <input type="text" class="form-control" name="username" value={this.state.username} onChange={(e)=>this.handleChange(e)} placeholder="Username" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                                <input type="email" className="form-control" name="email" value={this.state.email} onChange={(e)=>this.handleChange(e)} placeholder="Email Address" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)} placeholder="Password" required="required" />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock"></i>
                                    <i className="fa fa-check"></i>
                                </span>
                                <input type="password" className="form-control" name="confirm_password" value={this.state.confirm_password} onChange={(e)=>this.handleChange(e)} placeholder="Confirm Password" required="required" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg offset-3">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center">Already have an account? <a href="./Login" className="text-danger">Login here</a></div>
                </div>
            </div>
        );
    }
    
}
export default Signup;