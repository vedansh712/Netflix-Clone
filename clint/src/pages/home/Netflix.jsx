import { useState, useEffect } from "react";
import "./netflix.css";
import TopNav from "../../components/topnav/TopNav";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getGenres, fetchMovie } from "../../redux/netflixSlice";
import SliderContainer from "../../components/sliderContainer/SliderContainer";

const Netflix = () => {
  const navigate = useNavigate();
  const movies = useSelector((state) => state.netflix.movies);
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovie({ type: "all" }));
    }
  });

  const [isScroll, setisScroll] = useState(false);
  window.onscroll = () => {
    setisScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies);

  return (
    <div>
      <div className="home">
        <TopNav isScroll={isScroll} />
        <img
          className="bgimage"
          src="https://source.unsplash.com/random/1920x1080/?japan"
          style={{ height: "70vh", width: "100%" }}
        />
        <div className="container">
          <div className="title">
            <h1>Nature</h1>
            <p>
              Dr James Fox explores the connection between Japanese culture and
              the natural environment. He travels around the country discovering
              how Buddhism and Shinto shaped a very different response to nature
              than that of the West.
            </p>
          </div>
          <div className="buttons">
            <button className="pbtn" onClick={() => navigate("/player")}>
              <PlayCircleOutlineIcon /> Play
            </button>
            <button className="pbtn">
              <InfoOutlinedIcon /> Info
            </button>
          </div>
        </div>
      </div>
      <SliderContainer movies={movies} />
    </div>
  );
};

export default Netflix;
