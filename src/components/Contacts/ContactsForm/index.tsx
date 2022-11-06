import "./contactsForm.scss";
import { Formik, Field } from "formik";
import { Form, FloatingLabel } from "react-bootstrap";
import { validationForm } from "./validationForm";
import ContactsButton from "./ContactsButton";
import { useState } from "react";

const ContactsForm = () => {
  const [isTouchedForm, setIsTouchedForm] = useState(true);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        comment: "",
        confirm: true
      }}
      validateOnBlur
      onSubmit={(values: any) => {
        console.log(values);
      }}
      validationSchema={validationForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
        setFieldTouched,
        resetForm
      }) => (
        <Form className="contacts__form">
          <div className="contacts__form__main">
            <div>
              <FloatingLabel
                label={
                  <p className="input__label">
                    Ваше имя<mark>*</mark>
                  </p>
                }
              >
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setIsTouchedForm(true)}
                  value={values.name}
                  isInvalid={touched.name && errors.name ? true : false}
                  placeholder={String(
                    <p className="input__placeholder">
                      Ваше имя<mark>*</mark>
                    </p>
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                label={
                  <p className="input__label">
                    Ваш E-Mail<mark>*</mark>
                  </p>
                }
              >
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={() => setIsTouchedForm(true)}
                  value={values.email}
                  isInvalid={touched.email && errors.email ? true : false}
                  placeholder={String(
                    <p>
                      Ваш E-Mail<mark>*</mark>
                    </p>
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </FloatingLabel>
            </div>
            <FloatingLabel
              label={
                <p className="input__label">
                  Комментарий<mark>*</mark>
                </p>
              }
            >
              <Form.Control
                type="email"
                name="comment"
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={() => setIsTouchedForm(true)}
                value={values.comment}
                isInvalid={touched.comment && errors.comment ? true : false}
                placeholder={String(
                  <p>
                    Комментарий<mark>*</mark>
                  </p>
                )}
                as="textarea"
              />
              <Form.Control.Feedback type="invalid">
                {errors.comment}
              </Form.Control.Feedback>
            </FloatingLabel>

            <div className="input__radio">
              <Field
                type="radio"
                name="confirm"
                value={values.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.confirm ? true : false}
              />
              <label>
                Согласен с{" "}
                <a href="/" target="_blank" rel="noreferrer">
                  Политикой конфиденциальности
                </a>
              </label>
            </div>
          </div>
          <ContactsButton
            isTouchedForm={isTouchedForm}
            isValid={isValid}
            dirty={dirty}
            action={() => {
              if (!isValid || !dirty) {
                setFieldTouched("name");
                setFieldTouched("email");
                setFieldTouched("comment");
              } else {
                handleSubmit();
                resetForm();
                setIsTouchedForm(false);
              }
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactsForm;
