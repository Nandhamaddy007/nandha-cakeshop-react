export default function Signup() {
  var email, name, password;
  let getEmail = (event) => {
    email = event.target.value;
  };
  let getName = (event) => {
    name = event.target.value;
  };
  let getPassword = (event) => {
    password = event.target.value;
  };
  function signUp() {
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Password: ', password);
  }
  return (
    <div className="container" style={{ width: '50%', margin: 'auto' }}>
      <h2 className="">Signup here</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Please Enter your Name"
          className="form-control"
          onChange={getName}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email id here"
          onChange={getEmail}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password here"
          className="form-control"
          onChange={getPassword}
        />
      </div>

      <button
        type="button"
        className="btn btn-success d-flex justify-content-start"
        onClick={signUp}
      >
        Signup
      </button>
    </div>
  );
}
