import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgres = ({ Img, V, color}) => {
  return (
    <div className="anan" label="Arbitrary content">
      <CircularProgressbarWithChildren
        value={V}
        styles={buildStyles({
          pathColor: `${color}`,
          textColor: `#727272`,
          strokeLinecap: "butt",
        })}
      >
        <img style={{ width: 40, marginTop: -5 }} src={Img} alt="CSS" />
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{V}%</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircleProgres;
