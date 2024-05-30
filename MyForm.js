import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./App.css";

const validationSchema = yup.object().shape({
  user: yup.string().required("User is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  otp_code: yup.string().required("OTP code is required"),
  otp_date: yup.date().required("OTP date is required"),
  account_status: yup.string().required("Account status is required"),
  email_verified_at: yup.date().required("Email verified date is required"),
  org: yup.string().required("Organization is required"),
});

const MyForm = () => {
  const navigate = useNavigate();
  const hospitals = [
    { label: "Apollo Hospital", value: "Apollo Hospital" },
    { label: "Lotus Hospital", value: "Lotus Hospital" },
    { label: "CMR Hospital", value: "CMR Hospital" },
    { label: "KIMS Hospital", value: "KIMS Hospital" },
    { label: "Rainbow Hospital", value: "Rainbow Hospital" },
    { label: "Yashoda Hospital", value: "Yashoda Hospital" },
    { label: "Fortis Hospital", value: "Fortis Hospital" },
  ];

  return (
    <div className="form-container">
      <h1>User Form</h1>
      <div className="scrollable-form">
        <Formik
          initialValues={{
            user: "",
            email: "",
            password: "",
            confirm_password: "",
            otp_code: "",
            otp_date: new Date(),
            account_status: "",
            email_verified_at: new Date(),
            org: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            navigate("/success"); // Redirect to the success page
          }}
        >
          {({ values, errors, handleChange, setFieldValue }) => (
            <Form className="form">
              <div className="form-field">
                <label htmlFor="user">User *</label>
                <InputText
                  id="user"
                  name="user"
                  value={values.user}
                  onChange={handleChange}
                  className={errors.user ? "p-invalid" : ""}
                />
                <ErrorMessage name="user" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email *</label>
                <InputText
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={errors.email ? "p-invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="password">Password *</label>
                <Password
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className={errors.password ? "p-invalid" : ""}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="confirm_password">Confirm Password *</label>
                <Password
                  id="confirm_password"
                  name="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  className={errors.confirm_password ? "p-invalid" : ""}
                />
                <ErrorMessage name="confirm_password" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="org">Organization *</label>
                <div className="dropdown-container">
                  <Dropdown
                    id="org"
                    name="org"
                    value={values.org}
                    options={hospitals}
                    onChange={(e) => setFieldValue("org", e.value)}
                    className={errors.org ? "p-invalid" : ""}
                    style={{ width: "100%", backgroundColor: "lightgrey" }}
                    scrollHeight="100px"
                  />
                </div>
                <ErrorMessage name="org" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="otp_code">OTP Code *</label>
                <InputText
                  id="otp_code"
                  name="otp_code"
                  value={values.otp_code}
                  onChange={handleChange}
                  className={errors.otp_code ? "p-invalid" : ""}
                />
                <ErrorMessage name="otp_code" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="otp_date">OTP Date *</label>
                <div className="calendar-container">
                  <Calendar
                    id="otp_date"
                    name="otp_date"
                    value={values.otp_date}
                    onChange={(e) => setFieldValue("otp_date", e.value)}
                    className={errors.otp_date ? "p-invalid" : ""}
                    inputClassName="calendar-input"
                  />
                </div>
                <ErrorMessage name="otp_date" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="account_status">Account Status *</label>
                <InputText
                  id="account_status"
                  name="account_status"
                  value={values.account_status}
                  onChange={handleChange}
                  className={errors.account_status ? "p-invalid" : ""}
                />
                <ErrorMessage name="account_status" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <label htmlFor="email_verified_at">Email Verified At *</label>
                <div className="calendar-container">
                  <Calendar
                    id="email_verified_at"
                    name="email_verified_at"
                    value={values.email_verified_at}
                    onChange={(e) => setFieldValue("email_verified_at", e.value)}
                    className={errors.email_verified_at ? "p-invalid" : ""}
                    inputClassName="calendar-input"
                  />
                </div>
                <ErrorMessage name="email_verified_at" component="div" className="error-message" />
              </div>

              <button type="submit" className="p-button p-button-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MyForm;
