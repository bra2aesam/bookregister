// Import the Axios library to make HTTP requests
import axios from "axios";

// Initialize the initial state of the reducer
const initialState = {
  error: "",
  emailORUsername: "",
  password: "",
};

// Define the reducer function that handles login-related actions
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "emailORUsername":
      // Update the state with the email or username
      return {
        ...state,
        emailORUsername: action.emailORUsername,
      };

    case "password":
      // Update the state with the password
      return {
        ...state,
        password: action.password,
      };

    case "LOGIN":
      // Define an async function that makes the HTTP request to the login endpoint
      const loadInfo = async () => {
        try {
          // Make the HTTP GET request with the provided email/username and password
          const res = await axios.get(
            `http://localhost/Bookly/backend/login.php?email=${state.emailORUsername}&password=${state.password}`
          );
          
          // Save the user information to the session storage
          // sessionStorage.clear();
          sessionStorage.setItem("user_info", JSON.stringify(res.data));
          
          // Redirect the user to "/home"
          window.location.href = "/home";
          
        } catch (error) {
          // Handle errors that may occur during the API call
          console.error(error);
          // Update the state with an error message indicating that the credentials are invalid
          return { ...state, error: "Invalid email/username or password" };
        }
      };

      // Call the async function to make the HTTP request and update the state
      loadInfo();

      // Return the current state
      return state;

    default:
      // Return the current state for any other actions
      return state;
  }
};

// Export the reducer function
export default loginReducer;