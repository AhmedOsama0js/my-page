import MainBtn from "../../mainBtn/MainBtn";
import "./MyInfo.css";
import { FaDownload } from "react-icons/fa";
import CV from "../../../dist/data/Ahmed_Osama(FullStack).pdf";
import { useTranslation } from "../../../contexts/LanguageContext";

function calculateAgeAndYear(day, month, year, reMonth) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let ageYears = currentYear - year;
  let ageMonths = currentMonth - month;

  if (currentDay < day) {
    ageMonths--;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return ` ${ageYears}  Years ${reMonth ? ageMonths + " " + "Month" : ""} `;
}

const MyInfo = () => {
  const t = useTranslation();

  return (
    <div className="my-info-container">
      <h2>{t("personalInfo")}</h2>
      <div className="ul-info">
        <ul>
          <li>
            <span className="head">First Name:</span> Ahmed
          </li>
          <li>
            <span className="head">Age:</span> {calculateAgeAndYear(1, 4, 1997)}
          </li>
          <li>
            <span className="head">Freelance:</span> {t("freelance")}
          </li>
          <li>
            <span className="head">Phone:</span>{" "}
            <a
              href="https://api.whatsapp.com/send?phone=201013265916&text= ..السلام عليكم  "
              target="_blank"
              rel="noopener noreferrer"
            >
              +201013265916{" "}
            </a>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <span className="head">Last Name:</span> Osama{" "}
          </li>
          <li>
            {" "}
            <span className="head">Nationality:</span> {t("nationality")}{" "}
          </li>
          <li>
            {" "}
            <span className="head">experience:</span>{" "}
            {calculateAgeAndYear(1, 8, 2022, true)}
          </li>
          <li>
            {" "}
            <span className="head">Email:</span>{" "}
            <a
              href="mailto: ahmedosama.aw@gmail.com?subject=Subject%20Text&body=Hello,%20this%20is%20my%20message."
              id="sendEmailButton"
            >
              ahmedosama.aw@gmail
            </a>{" "}
          </li>
        </ul>
      </div>
      <a href={CV} download="Ahmed_Osama(FullStack).pdf">
        <MainBtn Icon={<FaDownload />} name={t("download")} />
      </a>
    </div>
  );
};

export default MyInfo;
