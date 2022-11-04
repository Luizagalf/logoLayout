import "./contactsForm.scss";
import { Formik, Field } from "formik";
import { Form, FloatingLabel } from "react-bootstrap";
import { validationForm } from "./validationForm";

const ContactsForm = () => {
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
        setFieldTouched,
        isValid,
        handleSubmit,
        dirty
      }) => (
        <Form className="contacts__form">
          <div>
            <Form.Group className="form-floating">
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
            </Form.Group>

            <Form.Group className="form-floating">
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
            </Form.Group>
          </div>
          <Form.Group className="form-floating">
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
          </Form.Group>

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

          {/* <div>
                <button
                  className="signin-btn"
                  type="submit"
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}
                >
                  Отправить
                </button>
              </div> */}
        </Form>
      )}
    </Formik>
  );
};

export default ContactsForm;
