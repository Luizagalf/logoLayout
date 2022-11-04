import { object, string } from "yup";

export const validationForm = object({
  name: string()
    .nullable()
    .required("Поле обязательно для заполнения")
    .max(50, "Не более 50 символов"),

  email: string()
    .email("Введите верный email")
    .nullable()
    .required("Поле обязательно для заполнения")
    .max(30, "Не более 30 символов"),
  comment: string()
    .nullable()
    .required("Поле обязательно для заполнения")
    .max(100, "Не более 100 символов")
});
