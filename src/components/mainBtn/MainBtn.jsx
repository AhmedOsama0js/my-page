import "./MainBtn.css"

const MainBtn = ({Icon, name}) => {
  return (
      <div className="main-btn">
      <span className="icon">{Icon}</span> <span className="name">{name}</span>
    </div>
  );
}

export default MainBtn
