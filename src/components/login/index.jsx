import "./login.css";

export default function Login(props) {
  return (
    <div className="form-container">
      <div className="form">
        <h1>Sign in</h1>

        <form onSubmit={props.handleSignIn}>
          <label htmlFor="email">Email</label>

          <input
            onChange={props.handleEmailChange}
            type="email"
            id="email"
            name="email"
            placeholder="abbax.uddin@gmail.com"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            onChange={props.handlePasswordChange}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <i className="fa fa-eye" id="eye-icon"></i>

          <input
            type="checkbox"
            className="term"
            id="terms"
            name="terms"
            required
          />

          <label htmlFor="terms">I agree to the Terms and Conditions</label>

          <button type="submit">Sign in</button>
        </form>
      </div>

      <div className="image-container">
        <img src="https://cdn-lite.ip2location.com/img/sign-up.png" />
      </div>
    </div>
  );
}
