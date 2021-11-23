import { Component } from 'react'
class Login extends Component{
    constructor(){
        super()
        this.state={
            error:null,
            counter:0
        }
    }
    user={
        email:"",
        pass:""
    }
    getEmail=(e)=>{
        this.user.email=e.target.value
    }
    getPass=(e)=>{
        this.user.pass=e.target.value
    }
    login=()=>{
        console.log(this)
        if(this.user.email==="nand@cakemail.com" && this.user.pass==="CakePass"){
            this.props.loginDone(true)
        }
    }
    render(){
        return(
            <div>
                <div className="container" style={{width:"50%",margin:"auto"}}>
                <h1>Login here</h1>
                <div className="form-group">
                <label  for="exampleInputEmail1">Email: </label>
                <input type="email" class="form-control" id="exampleInputEmail1" onChange={this.getEmail} placeholder="Enter your Email"/>
                </div>
                <div className="form-group">
                <label>Password: </label>
                <input type="password" class="form-control" onChange={this.getPass} placeholder="Enter your Password"/>
                </div>
                <button className="btn btn-primary" onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}
export default Login