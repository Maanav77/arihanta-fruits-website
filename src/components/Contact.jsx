import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ---------------- SCROLL REVEAL ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".reveal-contact")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ---------------- VALIDATION ---------------- */
  const validate = (data) => {
    const newErrors = {};

    // Name
    if (!data.name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(data.name)) {
      newErrors.name = "Only letters and spaces allowed";
    } else if (data.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone
    if (!data.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Product
    if (!data.product) {
      newErrors.product = "Product is required";
    } else if (data.product.length < 2) {
      newErrors.product = "Product name is too short";
    }

    // Message (optional)
    if (data.message && data.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  /* ---------------- LIVE CHANGE HANDLER ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value.trimStart(),
    };

    setFormData(updatedData);
    setErrors(validate(updatedData));
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e) => {
  e.preventDefault();

  const trimmedData = {
    ...formData,
    name: formData.name.trim(),
    email: formData.email.trim(),
    phone: formData.phone.trim(),
    product: formData.product.trim(),
    message: formData.message.trim(),
  };

  const validationErrors = validate(trimmedData);
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  setIsSubmitting(true);

  emailjs
    .send(
      "service_u2ryhu3",      // 🔴 replace
      "template_capo54c",     // 🔴 replace
      {
        name: trimmedData.name,
        email: trimmedData.email,
        phone: trimmedData.phone,
        product: trimmedData.product,
        quantity: trimmedData.quantity,
        message: trimmedData.message,
      },
      "s7RV7hTXNEwfFgiOg"       // 🔴 replace
    )
    .then(
      () => {
        setSuccess(true);
        setIsSubmitting(false);

        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    );
};


  /* ---------------- JSX ---------------- */
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* INFO */}
          <div className="contact-info reveal-contact">
            <h2>Get in Touch</h2>
            <p className="contact-sub">
              Reach out for quotes, product details, or export queries.
            </p>

            <ul className="contact-list">
              <li><strong>📍 Address:</strong> 5B, Parihar Colony, Kalani Nagar, Indore, <br /> Madhya Pradesh</li>
              <li><strong>📞 Phone:</strong> +91 91317 14094</li>
              <li><strong>✉️ Email:</strong> arihantafruits@gmail.com</li>
              <li><strong>🌐 </strong> Serving all over India</li>
            </ul>
          </div>

          {/* FORM */}
          <form
            className="contact-form glass-card reveal-contact"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* NAME */}
            <div className="floating-group">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Name *</label>
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            {/* EMAIL */}
            <div className="floating-group">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Email *</label>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            {/* PHONE */}
            <div className="floating-group">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                inputMode="numeric"
              />
              <label>Phone *</label>
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            {/* PRODUCT */}
            <div className="floating-group">
              <input
                name="product"
                value={formData.product}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Product *</label>
              {errors.product && <span className="error-text">{errors.product}</span>}
            </div>

            {/* QUANTITY */}
            <div className="floating-group">
              <input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Quantity</label>
            </div>

            {/* MESSAGE */}
            <div className="floating-group">
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
              />
              <label>Message</label>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

            {success && (
              <div className="success-text">
                ✅ Message sent successfully
              </div>
            )}

            <div className="contact-divider">
              <span>or</span>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919131714094?text=Hello%20Arihanta%20Fruits,%20I%20am%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              💬 Chat on WhatsApp
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
