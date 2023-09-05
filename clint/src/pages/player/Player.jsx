import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import "./player.css";

const Player = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="player">
        <div className="backarrow">
          <button onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </button>
        </div>
        <video
          src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
          autoPlay
          loop
          controls
          muted
        />
      </div>
    </div>
  );
};

export default Player;
