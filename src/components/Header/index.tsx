import "./header.scss";
import { NavLink } from "react-router-dom";
import arrow from "assets/images/arrow.svg";
// import Tooltip from "sharedComponents/Tooltip";

type HeaderProps = {
  selectedModule: string;
  setSelectedModule: (el: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (el: string) => void;
};

const Header = ({
  selectedModule,
  setSelectedModule,
  selectedLanguage,
  setSelectedLanguage
}: HeaderProps) => {
  return (
    <header className="header">
      <NavLink to="/">LOGO</NavLink>
      <div className="header__middle">
        <NavLink
          to="/projects"
          className={`item ${
            selectedModule === "Проекты" ? "item__selected" : ""
          }`}
          onClick={() => setSelectedModule("Проекты")}
        >
          <p>Проекты</p>
          <div />
        </NavLink>
        <NavLink
          to="/aboutcompany"
          className={`item ${
            selectedModule === "О компании" ? "item__selected" : ""
          }`}
          onClick={() => setSelectedModule("О компании")}
        >
          <p>О компании</p>
          <div />
        </NavLink>
        <NavLink
          to="/contacts"
          className={`item ${
            selectedModule === "Контакты" ? "item__selected" : ""
          }`}
          onClick={() => setSelectedModule("Контакты")}
        >
          <p>Контакты</p>
          <div />
        </NavLink>
      </div>
      <div className="header__end">
        <div>
          <div
            onClick={() => {
              setSelectedLanguage("ru");
            }}
            className={`smallItem ${
              selectedLanguage === "ru" ? "smallItem__selected" : ""
            }`}
          >
            <p>RU</p>
            <div></div>
          </div>
          <div
            onClick={() => {
              setSelectedLanguage("en");
            }}
            className={`smallItem ${
              selectedLanguage === "en" ? "smallItem__selected" : ""
            }`}
          >
            <p>EN</p>
            <div></div>
          </div>
        </div>
        <NavLink to="/" className="header__end_link">
          Начать проект
          <img src={arrow} alt="" />
        </NavLink>
      </div>
      <div className="header__end__mob">
        <div />
        <div />
        <div />
      </div>
    </header>
  );
};

export default Header;
