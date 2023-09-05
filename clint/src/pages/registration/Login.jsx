// import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./registration.css";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="signin">
      <Header signin />
      <div className="body">
        <div className="inputfeilds">
          <div className="box">
            <div className="loginbox">
              <h1>LOGIN</h1>
              <input
                type="email"
                placeholder="Email ID"
                name="email"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>LogIn</button>
            </div>
            <div className="signinbox">
              <p>
                New to Netflix?
                <Link className="Link" to="/signup">
                  Sign up now.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
