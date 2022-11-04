import "./contacts.scss";
import ContactsButton from "./ContactsButton";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Мы рядом</h1>
      <p>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам
        на почту<mark>info@site.com</mark>
      </p>
      <div className="contacts__main">
        <ContactsForm />
        <ContactsButton />
      </div>
    </div>
  );
};

export default Contacts;
