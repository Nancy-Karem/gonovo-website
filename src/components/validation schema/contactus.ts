import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),

  company_name: Yup.string()
    .min(2, "Company name must be at least 2 characters")
    .max(80, "Company name must be 80 characters or less")
    .required("Company name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(
      /^(\+?\d{1,4}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number format"
    )
    .required("Phone number is required"),

  service: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one service")
    .required("Service is required"),

  budget: Yup.number()
    .typeError("Budget must be a number")
    .positive("Budget must be greater than 0")
    .required("Budget is required"),

  budget_currency: Yup.string()
    .oneOf(["USD", "GBP"], "Invalid currency")
    .required("Currency is required"),

  timeline: Yup.number()
    .typeError("Timeline must be a number")
    .integer("Timeline must be a whole number")
    .positive("Timeline must be greater than 0")
    .required("Timeline is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be 500 characters or less")
    .required("Message is required"),
});

export default validationSchema;
