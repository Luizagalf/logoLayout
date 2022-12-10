import "./footer.scss";
import { NavLink } from "react-router-dom";
import arrow from "assets/images/arrow.svg";
import whatsapp from "assets/images/whatsapp.svg";
import telegram from "assets/images/telegram.svg";

type FooterProps = {
  setSelectedModule: (el: string) => void;
};

const Footer = ({ setSelectedModule }: FooterProps): JSX.Element => {
  return (
    <footer className="footer">
      <div>
        <div className="footer__middle">
          <NavLink to="/main" onClick={(): void => setSelectedModule("")}>
            LOGO
          </NavLink>
          <div className="footer__block">
            <div className="footer__col">
              <h3>Услуги</h3>
              <NavLink
                to="/main"
                className="footer__item"
                onClick={(): void =>
                  setSelectedModule("Support and development")
                }
              >
                Support and development
              </NavLink>
              <NavLink
                to="/main"
                className="footer__item"
                onClick={(): void =>
                  setSelectedModule("UI/UX and product design")
                }
              >
                UI/UX and product design
              </NavLink>
              <NavLink
                to="/main"
                className="footer__item"
                onClick={() =>
                  setSelectedModule("Progressive Web Applications (PWA)")
                }
              >
                Progressive Web Applications (PWA)
              </NavLink>
            </div>
            <div className="footer__col">
              <h3>
                Компания
                <div />
              </h3>
              <NavLink
                to="/projects"
                className="footer__item"
                onClick={(): void => setSelectedModule("Проекты")}
              >
                Проекты
              </NavLink>
              <NavLink
                to="/aboutcompany"
                className="footer__item"
                onClick={(): void => setSelectedModule("О компании")}
              >
                О компании
              </NavLink>
              <NavLink
                to="/contacts"
                className="footer__item"
                onClick={(): void => setSelectedModule("Контакты")}
              >
                Контакты
              </NavLink>
            </div>
            <div className="footer__col">
              <h3>
                Контакты
                <div />
              </h3>
              <div className="footer__row">
                <div className="footer__col">
                  <NavLink
                    to="/main"
                    className="footer__item"
                    onClick={(): void => setSelectedModule("")}
                  >
                    Скачать презентацию <img src={arrow} alt="" />
                  </NavLink>
                  <p className="footer__item">+7 (499) 999-99-99</p>
                  <p className="footer__item">info@site.com</p>
                </div>
                <div className="footer__col">
                  <img src={telegram} alt="Telegram" />
                  <img src={whatsapp} alt="WhatAapp" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__end">
          <p>© Company 2022. All rights reserved.</p>
          <NavLink to="/main" onClick={(): void => setSelectedModule("")}>
            Политика конфиденциальночти
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
