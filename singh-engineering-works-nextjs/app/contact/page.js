'use client'

import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";

const Contact = () => {
  const mailkey = process.env.REACT_APP_FORMSPREE_ID;
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = {
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string(),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await axios.post(
          `https://formspree.io/f/${mailkey}`,
          values
        );
        setMessage("Message sent successfully!");
        resetForm();
      } catch (error) {
        setMessage("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  };

  return (
    <div className="container" style={{ marginTop: "8.5rem" }}>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="contact-form">
            <h4>Contact Us</h4>
            <div className="s-border"></div>
            <div className="m-border"></div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-danger">{formik.errors.message}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="contact-info">
            <h4>Get In Touch</h4>
            <div className="s-border"></div>
            <div className="m-border"></div>
            <div className="information">
              <div className="information-location">
                <i className="fa-solid fa-location-dot me-2"></i>
                <span className="info-text">
                  B-16, B Block, Sector 64, Noida Sector 64, Noida – 201301
                </span>
              </div>
              <div className="information-email">
                <span className="info-email">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <a href="mailto:prabhudayal.Singh@gmail.com">
                    prabhudayal.Singh@gmail.com
                  </a>
                </span>

                <span className="info-email">
                  <i className="fa-solid fa-envelope me-2"></i>
                  <a href="mailto:singhengineeringworks.1978@gmail.com">
                    singhengineeringworks.1978@gmail.com
                  </a>
                </span>
              </div>
              <div className="information-phone">
                <div className="info-phone">
                  <i className="fa-solid fa-phone me-2"></i> +91 9810802982
                </div>
                <div className="info-phone">
                  <i className="fa-solid fa-phone me-2"></i> +91 9810804532
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;