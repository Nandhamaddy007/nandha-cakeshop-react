import { Component } from 'react'
class Navbar extends Component{
  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
<a class="navbar-brand" href="#">{this.props.title}</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
  </li>
  <li class="nav-item">
   <h6>Your Wallet Balance is : {this.props.money}</h6>
  </li>
</ul>
<form class="d-flex">
 {this.props.isLoggedIn?<button class="btn btn-outline-danger" onClick={this.props.setLogout} >Logout</button>:
 <div>
 <button class="btn btn-outline-primary" >Login</button> 
 &nbsp;&nbsp;
 <button class="btn btn-outline-success" >Signup</button>
 </div>} 
 
</form>
</div>
</div>
</nav>
  </div>
    )
  }
}

export default Navbar