import "./Slider.css";

const Slider = ({ data }) => {
  return (
    <div class="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${data}?controls=0`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Slider;
