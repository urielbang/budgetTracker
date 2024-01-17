import "./singUp.css";
export default function SignUp(props) {
  return (
    <div className="form-container">
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={props.changeHandler}
            type="text"
            id="name"
            name="name"
            placeholder="Abbas Uddin"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={props.changeHandler}
            type="email"
            id="email"
            name="email"
            placeholder="abbax.uddin@gmail.com"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={props.changeHandler}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <i className="fa fa-eye" id="eye-icon"></i>
          <input
            onChange={props.changeHandler}
            type="checkbox"
            className="term"
            id="terms"
            name="terms"
            required
          />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="image-container">
        <img src="https://cdn-lite.ip2location.com/img/sign-up.png" />
      </div>
    </div>
  );
}
