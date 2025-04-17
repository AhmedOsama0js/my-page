import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import { useForm, ValidationError } from "@formspree/react";
import { IoMail } from "react-icons/io5";
import MainBtn from "../../components/mainBtn/MainBtn";
import { IoSend } from "react-icons/io5";
import DonePop from "../../model/DonePop";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "../../contexts/LanguageContext";

function Contact() {
  const [state, handleSubmit] = useForm("moqooebj");
  const [displayPop, setDisplayPop] = useState(null);
  const t = useTranslation();

  useEffect(() => {
    if (state.succeeded) {
      setDisplayPop(<DonePop send="Send Successful" color="#13721354" />);
      setTimeout(() => {
        setDisplayPop(null);
        document.getElementById("contact-form").reset();
      }, 5000);
    } else if (state.errors) {
      setDisplayPop(<DonePop send="Sent wrong" color="#7213133f" />);
      setTimeout(() => {
        setDisplayPop(null);
      }, 5000);
    } else if (state.submitting) {
      setDisplayPop(<DonePop send="Sent wrong" color="#7270133f" />);
    }
  }, [state.succeeded, state.errors, state.submitting]);

  return (
    <div className="contact-container">
      {displayPop}
      <h2 className="dir">
        <IoMail /> {t("contact")}
      </h2>
      <div className="contact-body dir">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="name">{t("enterName")}</label>
            <input id="text" type="name" name="name" autoComplete="off" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="row">
            <label htmlFor="email">{t("emailAddress")}</label>
            <input id="email" type="email" name="email" autoComplete="off" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="row">
            <label htmlFor="phone">{t("phonNumber")}</label>
            <input id="phone" type="text" name="phone" autoComplete="off" />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="row">
            <label htmlFor="message">{t("enterMessage")}</label>
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="submitBtn"
            type="submit"
            disabled={state.submitting}
            dir="ltr"
          >
            <MainBtn
              Icon={<IoSend />}
              name={state.submitting ? t("sending..") : t("send")}
            />
          </button>
        </form>
        <a
          className="whatsapp-icon"
          href="https://api.whatsapp.com/send?phone=201013265916"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
export default Contact;
