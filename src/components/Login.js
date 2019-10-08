import React from "react";
import './Login.css';
var UsersDetails=JSON.parse(localStorage.getItem("UsersDetails"))
class Login extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:''
      }
    }
    handleChange=(event)=>{
        event.preventDefault();
         this.setState({[event.target.name]:event.target.value});
     }
      handleSubmit=(event)=>{
        event.preventDefault();
        for(var i=0;i<UsersDetails.length;i++)
        {
            if(UsersDetails[i].username===this.state.username && UsersDetails[i].password===this.state.password)
            {
                var a=true;
            }
        }
        if(a===true)
        {
            this.props.history.push('/');
        }
        else
        {
            alert('Invalid Username or Password')
        }
     }
    
    render(){
        return (
            <div>
                <div className="login-form" style={{ marginTop: "120px" }}>
                    <form onSubmit={this.handleSubmit}>
                        <img src="http://img.clipartlook.com/user-user-clipart-528_594.png" style={{ height: "80px", marginLeft: "100px" }}></img>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" value={this.state.username} onChange={(e)=>this.handleChange(e)}  placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" value={this.state.password} onChange={(e)=>this.handleChange(e)}  placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Log in</button>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                            <a href="#" className="pull-right">Forgot Password?</a>
                        </div>
                    </form>
                    <p className="text-center"><a href="./Signup">Create an Account</a></p>
                </div>
            </div>
        );
    
    }
   
}
export default Login;