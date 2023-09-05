import MovieSlider from "../movieslider/MovieSlider";
import "./slider.css";
const SliderContainer = ({ movies }) => {
  const getTheMovieBtw = (start, end) => {
    return movies.slice(start, end);
  };
  return (
    <div>
      <div className="SliderC">
        <MovieSlider data={getTheMovieBtw(0, 10)} title="Only on Netflix" />
        <MovieSlider data={getTheMovieBtw(10, 20)} title="Trending Now" />
        <MovieSlider data={getTheMovieBtw(20, 30)} title="Action Movie" />
        <MovieSlider data={getTheMovieBtw(30, 40)} title="Romance Movie" />
        <MovieSlider data={getTheMovieBtw(40, 50)} title="Family Time" />
        <MovieSlider data={getTheMovieBtw(50, 60)} title="Only For You" />
        <MovieSlider data={getTheMovieBtw(60, 70)} title="Thiriller Movie" />
        <MovieSlider data={getTheMovieBtw(70, 80)} title="Horrer movie" />
      </div>
    </div>
  );
};

export default SliderContainer;
