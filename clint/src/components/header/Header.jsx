import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="/NETFLIXlogo.png"
          alt="NETFLIX LOGO"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="btn">
        {props.login ? (
          <button onClick={() => navigate("/login")}>LOGIN</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Header;
