import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./topnav.css";
import { firebaseAuth } from "../../pages/utils/firebase-config";

import { signOut, onAuthStateChanged } from "firebase/auth";

const TopNav = (props) => {
  const navlink = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "Movies", link: "/movie" },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div>
      <nav className={`${props.isScroll ? "scroll" : "notscroll"}`}>
        <div className="left_side">
          <div className="logo">
            <img src="/NETFLIXlogo.png" alt="logo" />
          </div>
          <ul className="links">
            {navlink.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right_side">
          <button onClick={() => signOut(firebaseAuth)}>
            <LogoutIcon />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
