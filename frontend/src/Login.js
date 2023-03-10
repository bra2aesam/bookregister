// Import the required modules
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emailORUsername, login, password } from "./actions";
import './Relo.css';


// Define the Login component
function Login() {
  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  // Get the errorLog state from the Redux store using the useSelector hook
  const errorLog = useSelector(state => state.login);

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Dispatch the login action
    dispatch(login());
  }

  return (
    // Render the login form
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="email"
                className="login__input"
                placeholder="Email"
                onChange={(event) => dispatch(emailORUsername(event.target.value))}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock" />
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                onChange={(event) => dispatch(password(event.target.value))}
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right" />
            </button>
          </form>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{' '}
            <a href="./Register.js" className="link-danger">
              Register
            </a>
          </p>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>
  );
}

// Export the Login component as the default export
export default Login;