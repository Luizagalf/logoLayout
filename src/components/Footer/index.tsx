import "./footer.scss";
import { NavLink } from "react-router-dom";
import arrow from "assets/images/arrow.svg";
import whatsapp from "assets/images/whatsapp.svg";
import telegram from "assets/images/telegram.svg";

type FooterProps = {
  setSelectedModule: (el: string) => void;
};

const Footer = ({ setSelectedModule }: FooterProps) => {
  return (
    <footer className="footer">
      <div>
        <div className="footer__middle">
          <NavLink to="/main" onClick={() => setSelectedModule("")}>
            LOGO
          </NavLink>
          <div className="middle__block">
            <div className="middle__block__col">
              <h3>
                <p>Услуги</p>
                <div />
              </h3>
              <NavLink
                to="/main"
                className="middle__block__item"
                onClick={() => setSelectedModule("Support and development")}
              >
                Support and development
              </NavLink>
              <NavLink
                to="/main"
                className="middle__block__item"
                onClick={() => setSelectedModule("UI/UX and product design")}
              >
                UI/UX and product design
              </NavLink>
              <NavLink
                to="/main"
                className="middle__block__item"
                onClick={() =>
                  setSelectedModule("Progressive Web Applications (PWA)")
                }
              >
                Progressive Web Applications (PWA)
              </NavLink>
            </div>
            <div className="middle__block__col">
              <h3>
                Компания
                <div />
              </h3>
              <NavLink
                to="/projects"
                className="middle__block__item"
                onClick={() => setSelectedModule("Проекты")}
              >
                Проекты
              </NavLink>
              <NavLink
                to="/aboutcompany"
                className="middle__block__item"
                onClick={() => setSelectedModule("О компании")}
              >
                О компании
              </NavLink>
              <NavLink
                to="/contacts"
                className="middle__block__item"
                onClick={() => setSelectedModule("Контакты")}
              >
                Контакты
              </NavLink>
            </div>
            <div className="middle__block__col">
              <h3>
                Контакты
                <div />
              </h3>
              <div className="middle__block__row">
                <div className="middle__block__col">
                  <NavLink
                    to="/main"
                    className="middle__block__item"
                    onClick={() => setSelectedModule("")}
                  >
                    Скачать презентацию <img src={arrow} alt="" />
                  </NavLink>
                  <p className="middle__block__item">+7 (499) 999-99-99</p>
                  <p className="middle__block__item">info@site.com</p>
                </div>
                <div className="middle__block__col">
                  <img src={telegram} alt="Telegram" />
                  <img src={whatsapp} alt="WhatAapp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__end">
          <p>© Company 2022. All rights reserved.</p>
          <NavLink to="/main" onClick={() => setSelectedModule("")}>
            Политика конфиденциальночти
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
