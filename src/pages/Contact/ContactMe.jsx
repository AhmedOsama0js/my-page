import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import { IoMail } from "react-icons/io5";
import MainBtn from "../../components/mainBtn/MainBtn";
import { IoSend } from "react-icons/io5";
import DonePop from "../../model/DonePop";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "../../contexts/LanguageContext";
import axios from "axios";

const fetchData = async (data) => {
  const TOKEN = "7754794989:AAE-p7mjyRQSUnEdiIkGho-407yxYTInl9g";
  const CHAT_ID = "1630033705";
  const text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
  await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    text: text,
  });
};

const validate = (data, setErrors, t) => {
  const newErrors = {};

  if (!data.name.trim()) newErrors.name = t("nameRequired");
  if (!data.email.trim()) newErrors.email = t("emailRequired");
  else if (!/\S+@\S+\.\S+/.test(data.email))
    newErrors.email = t("invalidEmail");

  if (!data.phone.trim()) newErrors.phone = t("phoneRequired");
  else if (!/^\d{11}$/.test(data.phone)) newErrors.phone = t("invalidPhone");

  if (!data.message.trim()) newErrors.message = t("messageRequired");

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

function Contact() {
  const t = useTranslation();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate(data, setErrors, t)) {
      setStatus("validationError");
      return;
    }
    setStatus("sending");
    setLoading(true);
    try {
      await fetchData(data);
      setLoading(false);
      setStatus("success");
    } catch (err) {
      setLoading(false);
      setStatus("error");
      console.error("Telegram Error", err);
    }

    setData({ name: "", email: "", phone: "", message: "" });
  };

  // useEffect
  useEffect(() => {
    if (
      status === "success" ||
      status === "error" ||
      status === "completeData"
    ) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-container">
      {status === "sending" && (
        <DonePop send={t("sending..")} color="#7270133f" />
      )}
      {status === "success" && (
        <DonePop send={t("sendSuccess")} color="#13721354" />
      )}
      {status === "error" && (
        <DonePop send={t("sendError")} color="#7213133f" />
      )}
      <h2 className="dir">
        <IoMail /> {t("contact")}
      </h2>
      <div className="contact-body dir">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="label-container">
              <label htmlFor="name">{t("enterName")}</label>
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
              value={data.name}
              onChange={(e) =>
                setData((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="row">
            <div className="label-container">
              <label htmlFor="email">{t("emailAddress")}</label>
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
            </div>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              value={data.email}
              onChange={(e) =>
                setData((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                })
              }
            />
          </div>

          <div className="row">
            <div className="label-container">
              <label htmlFor="phone">{t("phonNumber")}</label>
              {errors.phone && (
                <span className="error-msg">{errors.phone}</span>
              )}
            </div>
            <input
              id="phone"
              type="text"
              name="phone"
              autoComplete="off"
              value={data.phone}
              onChange={(e) =>
                setData((prev) => {
                  return {
                    ...prev,
                    phone: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="row">
            <div className="label-container">
              <label htmlFor="message">{t("enterMessage")}</label>
              {errors.message && (
                <span className="error-msg">{errors.message}</span>
              )}
            </div>
            <textarea
              id="message"
              name="message"
              value={data.message}
              onChange={(e) =>
                setData((prev) => {
                  return {
                    ...prev,
                    message: e.target.value,
                  };
                })
              }
            />
          </div>
          <button
            className="submitBtn"
            type="submit"
            disabled={loading}
            dir="ltr"
          >
            <MainBtn
              Icon={<IoSend />}
              name={loading ? t("sending..") : t("send")}
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
