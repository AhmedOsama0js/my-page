import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Slider.css";

const Slider = ({ data, closePop }) => {
  const [num, setNum] = useState(0);
  const isValidIndex = (index) => index >= 0 && index < data.length;

useEffect(() => {
  setNum(closePop());
}, [closePop]);


  const handlePrev = () => {
    setNum((prevNum) => (isValidIndex(prevNum - 1) ? prevNum - 1 : prevNum));
  };

  const handleNext = () => {
    setNum((prevNum) => (isValidIndex(prevNum + 1) ? prevNum + 1 : prevNum));
  };

  return (
    <div>
      <div className="body-slider">
        <button className="btn" onClick={handlePrev}>
          <GrPrevious />
        </button>
        {data && data.length > 0 && num >= 0 && num < data.length && (
          <img src={data[num]} alt="" />
        )}
        <button className="btn" onClick={handleNext}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Slider;
