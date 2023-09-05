import { useState } from "react";
import Header from "../../components/header/Header";
import "./registration.css";
import { firebaseAuth } from "../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const [formValue, setformValue] = useState({ email: "", password: "" });

  const handleSignin = async () => {
    try {
      const { email, password } = formValue;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="signin">
      <Header login />
      <div className="body">
        <div className="text">
          <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
          <h3>Endless entertainment starts at just ₹ 149. Cancel anytime.</h3>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
        </div>
        <div className="inputfeilds">
          {showPassword ? (
            <input
              type="password"
              placeholder="password"
              name="password"
              value={formValue.password}
              onChange={(e) =>
                setformValue({ ...formValue, [e.target.name]: e.target.value })
              }
            />
          ) : (
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              value={formValue.email}
              onChange={(e) =>
                setformValue({ ...formValue, [e.target.name]: e.target.value })
              }
            />
          )}
          {showPassword ? (
            <button onClick={handleSignin}>Sign In</button>
          ) : (
            <button
              onClick={() => {
                setshowPassword(true);
              }}
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
