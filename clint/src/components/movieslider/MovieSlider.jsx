import "./movie.css";
import Card from "../card/Card";
import React, { useRef, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const MovieSlider = React.memo(function MovieSlider({ data, title }) {
  const listRef = useRef();
  const [controlVisibility, setControlVisibility] = useState(false);
  const [slider, setSlider] = useState(0);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && slider > 0) {
      listRef.current.style.transform = `translateX(${440 + distance}px)`;
      setSlider(slider - 1);
    }

    if (direction === "right" && slider < 4) {
      listRef.current.style.transform = `translateX(${-300 + distance}px)`;
      setSlider(slider + 1);
    }
  };

  return (
    <div
      className="titleholder"
      onMouseEnter={() => setControlVisibility(true)}
      onMouseLeave={() => setControlVisibility(false)}
    >
      <h1>{title}</h1>
      <div className="wraper">
        <div
          className={`slider-action left ${!controlVisibility ? "none" : ""}`}
        >
          <button onClick={() => handleDirection("left")}>
            <KeyboardArrowLeftIcon />
          </button>
        </div>
        <div className="slider" ref={listRef}>
          {data.map((movie, index) => {
            return <Card moviedata={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${!controlVisibility ? "none" : ""}`}
        >
          <button onClick={() => handleDirection("right")}>
            <KeyboardArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
});

MovieSlider.displayName = "MovieSlider"; // Add the display name here

export default MovieSlider;
