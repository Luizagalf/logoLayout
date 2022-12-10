import "./contactsForm.scss";
import {
  Formik,
  Field,
  FormikState,
  FormikErrors,
  FormikTouched
} from "formik";
import { Form, FloatingLabel } from "react-bootstrap";
import { validationForm } from "./validationForm";
import ContactsButton from "./ContactsButton";
import { useState } from "react";

type Values = {
  name: string;
  email: string;
  comment: string;
  confirm: boolean;
};

type FormikFunctions = {
  values: Values;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  isValid: boolean;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  dirty: boolean;
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => void;
  resetForm: (nextState?: Partial<FormikState<Values>> | undefined) => void;
};

const ContactsForm = (): JSX.Element => {
  const [isTouched, setIsTouched] = useState<boolean>(true);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        comment: "",
        confirm: true
      }}
      validateOnBlur
      onSubmit={(values: Values): void => {
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
      }: FormikFunctions): JSX.Element => {
        return (
          <Form className="form">
            <div className="form__main">
              <div>
                <FloatingLabel
                  label={
                    <p className="form__label">
                      Ваше имя<mark>*</mark>
                    </p>
                  }
                >
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={(): void => setIsTouched(!isTouched)}
                    value={values.name}
                    isInvalid={touched.name && errors.name ? true : false}
                    placeholder={String(
                      <p className="form__placeholder">
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
                    <p className="form__label">
                      Ваш E-Mail<mark>*</mark>
                    </p>
                  }
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={(): void => setIsTouched(!isTouched)}
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
                  <p className="form__label">
                    Комментарий<mark>*</mark>
                  </p>
                }
              >
                <Form.Control
                  type="email"
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={(): void => setIsTouched(!isTouched)}
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

              <div className="form__input--radio">
                <div>
                  <Field
                    type="radio"
                    name="confirm"
                    value={values.confirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.confirm ? true : false}
                  />
                </div>
                <label>
                  Согласен с{" "}
                  <a href="/" target="_blank" rel="noreferrer">
                    Политикой конфиденциальности
                  </a>
                </label>
              </div>
            </div>
            <ContactsButton
              isTouched={isTouched}
              isValid={isValid}
              dirty={dirty}
              action={(): void => {
                if (!isValid || !dirty) {
                  setFieldTouched("name");
                  setFieldTouched("email");
                  setFieldTouched("comment");
                } else {
                  handleSubmit();
                  resetForm();
                }
              }}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactsForm;
