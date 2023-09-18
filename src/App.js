import "./App.css";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <GoogleOAuthProvider clientId="54780398562-eacfgab9k31uvv514fkev3b12bbrhep4.apps.googleusercontent.com">
      <div className="App">
        <div className="container">
          <Dashboard />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
