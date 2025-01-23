import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(
      /^(\+?\d{1,4}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number format"
    )
    .required("Phone number is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be 500 characters or less")
    .required("Message is required"),
});

export default validationSchema;
