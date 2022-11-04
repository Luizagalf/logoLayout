/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "components/Header/index";
import Footer from "components/Footer/index";
import { useState } from "react";

const App = () => {
  const [selectedModule, setSelectedModule] = useState("Контакты");
  const [selectedLanguage, setSelectedLanguage] = useState("ru");

  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <Header
            selectedModule={selectedModule}
            setSelectedModule={setSelectedModule}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
          <div className="app__main">
            <div className="app__main__crumbs">
              <p>Главная&nbsp;-</p>
              <p>&nbsp;{selectedModule}</p>
            </div>
          </div>
          <Footer
            selectedModule={selectedModule}
            setSelectedModule={setSelectedModule}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
