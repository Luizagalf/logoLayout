import "./contacts.scss";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Мы рядом</h1>
      <p>
        Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам
        на почту<mark>info@site.com</mark>
      </p>
      <ContactsForm />
    </div>
  );
};

export default Contacts;
