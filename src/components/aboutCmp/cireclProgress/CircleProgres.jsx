import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgres = ({ Img, V, color }) => {
  return (
    <div className="anan" label="Arbitrary content">
      <CircularProgressbarWithChildren
        value="100"
        styles={buildStyles({
          pathColor: `${color}`,
          textColor: `#727272`,
          strokeLinecap: "butt",
        })}
      >
        <img style={{ width: 35, marginTop: -5 }} src={Img} alt="CSS" />
        <div style={{ fontSize: 12 }}>
          <strong className="textInChart">{V}</strong>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircleProgres;
