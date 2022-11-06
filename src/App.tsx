import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import Error from "components/Error";
import Contacts from "components/Contacts";
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
            <div className="app__main__dots">
              <div />
              <div />
              <div />
            </div>
            <div>
              <div className="app__main__crumbs">
                <p>Главная</p>
                {selectedModule ? <p>&nbsp;-&nbsp;{selectedModule}</p> : ""}
              </div>
              <Routes>
                <Route index path="/contacts" element={<Contacts />} />
                <Route index path="/" element={<Contacts />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
          <Footer setSelectedModule={setSelectedModule} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
