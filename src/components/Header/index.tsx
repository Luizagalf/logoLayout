import "./header.scss";
import { NavLink } from "react-router-dom";
import arrow from "assets/images/arrow.svg";

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
}: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <NavLink to="/main" onClick={(): void => setSelectedModule("")}>
        LOGO
      </NavLink>
      <div className="header__middle">
        <NavLink
          to="/projects"
          className={`header__item ${
            selectedModule === "Проекты" ? "header__item--selected" : ""
          }`}
          onClick={(): void => setSelectedModule("Проекты")}
        >
          <p>Проекты</p>
          <div />
        </NavLink>
        <NavLink
          to="/aboutcompany"
          className={`header__item ${
            selectedModule === "О компании" ? "header__item--selected" : ""
          }`}
          onClick={(): void => setSelectedModule("О компании")}
        >
          <p>О компании</p>
          <div />
        </NavLink>
        <NavLink
          to="/contacts"
          className={`header__item ${
            selectedModule === "Контакты" ? "header__item--selected" : ""
          }`}
          onClick={(): void => setSelectedModule("Контакты")}
        >
          <p>Контакты</p>
          <div />
        </NavLink>
      </div>
      <div className="header__end">
        <div>
          <div
            onClick={(): void => {
              setSelectedLanguage("ru");
            }}
            className={`header__smallItem ${
              selectedLanguage === "ru" ? "header__smallItem--selected" : ""
            }`}
          >
            <p>RU</p>
            <div></div>
          </div>
          <div
            onClick={(): void => {
              setSelectedLanguage("en");
            }}
            className={`header__smallItem ${
              selectedLanguage === "en" ? "header__smallItem--selected" : ""
            }`}
          >
            <p>EN</p>
            <div></div>
          </div>
        </div>
        <NavLink
          to="/main"
          className="header__link"
          onClick={(): void => setSelectedModule("")}
        >
          Начать проект
          <img src={arrow} alt="" />
        </NavLink>
      </div>
      <div className="header__end--mob">
        <div />
        <div />
        <div />
      </div>
    </header>
  );
};

export default Header;
