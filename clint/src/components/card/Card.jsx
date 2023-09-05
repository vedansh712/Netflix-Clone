import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Card = React.memo(function Card({ moviedata }) {
  const [onHovered, setonHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="card-Container"
        onMouseEnter={() => setonHovered(true)}
        onMouseLeave={() => setonHovered(false)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${moviedata.image}`}
          alt="Movie Poster"
          onClick={() => navigate("/player")}
        />
        <p className="title">{moviedata.name}</p>

        {onHovered && (
          <div className="hover">
            <div className="image-video-wraper">
              <img
                src={`https://image.tmdb.org/t/p/w500${moviedata.image}`}
                alt="Movie Poster"
                onClick={() => navigate("/player")}
              />
              <video
                src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
                autoPlay
                loop
                controls
                muted
              />
            </div>
            <div className="info-container">
              <h3 className="movieName" onClick={() => navigate("/player")}>
                {moviedata.name}
              </h3>
              <div className="icons">
                <div className="controles">
                  <button title="play" onClick={() => navigate("/player")}>
                    <PlayCircleIcon />
                  </button>
                  <button title="like">
                    <ThumbUpIcon />
                  </button>
                  <button title="dis like">
                    <ThumbDownIcon />
                  </button>
                  <button title="add item to list">
                    <PlaylistAddIcon />
                  </button>
                  <button title="remove item from list">
                    <DownloadDoneIcon />
                  </button>
                </div>
                <div className="info">
                  <button title="more info">
                    <MoreVertIcon />
                  </button>
                </div>
              </div>
              <div className="genre">
                <ul>
                  {moviedata.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

Card.displayName = "Card";

export default Card;

// https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg
