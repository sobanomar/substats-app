"use client";

import { oswald } from "@/utils/fonts";
import { log } from "console";
import { ChevronDown, Loader2, CheckCircle, XCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Custom Dropdown Component
const Dropdown = ({
  id,
  name,
  label,
  placeholder = "Choose an option",
  options = [],
  required = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`mb-8 ${className}`}>
      <label
        htmlFor={id}
        className="mb-3 block text-sm font-medium text-dark dark:text-white"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative" ref={dropdownRef}>
        {/* Hidden input for form submission */}
        <input
          type="hidden"
          id={id}
          name={name}
          value={selectedValue}
          required={required}
        />

        {/* Custom dropdown trigger */}
        <div
          className="w-full cursor-pointer rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 pr-12 text-base text-body-color outline-none transition-all duration-300 ease-in-out hover:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-primary"
          onClick={toggleDropdown}
        >
          <span
            className={
              selectedLabel
                ? "text-body-color dark:text-body-color-dark"
                : "text-gray-400"
            }
          >
            {selectedLabel || placeholder}
          </span>
        </div>

        {/* Dropdown icon */}
        <ChevronDown
          className={`absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform cursor-pointer text-body-color transition-transform duration-300 ease-in-out dark:text-body-color-dark ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleDropdown}
        />

        {/* Dropdown options */}
        {isOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg border border-stroke bg-white py-2 shadow-lg dark:border-transparent dark:bg-[#2C303B] dark:shadow-two">
            {options.map((option) => (
              <div
                key={option.value}
                className="cursor-pointer px-4 py-2 text-base text-body-color transition-colors duration-200 hover:bg-gray-100 dark:text-body-color-dark dark:hover:bg-gray-700"
                onClick={() => handleSelect(option.value, option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Generic Input Component
const Input = ({
  id,
  name,
  type = "text",
  label,
  placeholder,
  required = false,
  error = "",
  className = "",
  ...props
}) => {
  console.log("error", error);

  return (
    <div className={`mb-8 ${className}`}>
      <label
        htmlFor={id}
        className="mb-3 block text-sm font-medium text-dark dark:text-white"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-lg border px-4 py-3 text-base outline-none
          ${
            error
              ? "border-red-500 focus:border-red-500 dark:border-red-500"
              : "border-stroke focus:border-primary dark:border-transparent dark:focus:border-primary"
          }
          bg-[#f8f8f8] dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:shadow-none`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Generic Textarea Component
const Textarea = ({
  id,
  name,
  label,
  placeholder,
  required = false,
  rows = 6,
  error = "",
  className = "",
  ...props
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <label
        htmlFor={id}
        className="mb-3 block text-sm font-medium text-dark dark:text-white"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className={`w-full resize-none rounded-lg border px-4 py-3 text-base outline-none
          ${
            error
              ? "border-red-500 focus:border-red-500 dark:border-red-500"
              : "border-stroke focus:border-primary dark:border-transparent dark:focus:border-primary"
          }
          bg-[#f8f8f8] dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:shadow-none`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Alert Component for success/error messages
const Alert = ({ type, message, onClose }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={`mb-6 flex items-center gap-3 rounded-lg border p-4 ${
        isSuccess
          ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/20 dark:text-green-200"
          : "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/20 dark:text-red-200"
      }`}
    >
      {isSuccess ? (
        <CheckCircle className="h-5 w-5 flex-shrink-0" />
      ) : (
        <XCircle className="h-5 w-5 flex-shrink-0" />
      )}
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-sm underline hover:no-underline"
      >
        Dismiss
      </button>
    </div>
  );
};

const ContactSection = () => {
  // Form state
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    query: "",
  });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validate form function
  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      query: "",
    };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate query
    if (!formData.query.trim()) {
      newErrors.query = "Message is required";
    } else if (formData.query.trim().length < 10) {
      newErrors.query = "Message must be at least 10 characters";
    }

    console.log("newErrors", newErrors);

    setErrors(newErrors);

    // ✅ Return true only if all error messages are empty
    return Object.values(newErrors).every((err) => err === "");
  };

  // Dropdown options
  const categoryOptions = [
    { value: "academy-owner", label: "Academy Owner" },
    { value: "bjj-promotion", label: "BJJ Promotion" },
    { value: "competitor", label: "Competitor" },
  ];

  const serviceOptions = [
    { value: "academy-business-analysis", label: "Academy/Business Analysis" },
    { value: "competitor-analysis", label: "Competitor Analysis" },
  ];

  // Handle input changes with real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setAlert(null);

    try {
      // Prepare payload according to API specification
      const payload = {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        description: formData.query.trim(),
      };

      const response = await fetch(
        "https://54.215.71.202.nip.io/api/users/contact-us/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        // Success
        setAlert({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        });

        // Reset form and errors
        setFormData({
          fullName: "",
          email: "",
          query: "",
        });
        setErrors({
          fullName: "",
          email: "",
          query: "",
        });

        // Reset form fields
        const form = e.target;
        form.reset();
      } else {
        // Handle different error status codes
        let errorMessage = "Something went wrong. Please try again.";

        if (response.status === 400) {
          errorMessage = "Please check your input and try again.";
        } else if (response.status === 500) {
          errorMessage = "Server error. Please try again later.";
        }

        setAlert({
          type: "error",
          message: errorMessage,
        });
      }
    } catch (error) {
      // Network error or other issues
      setAlert({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  // Close alert
  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 ">
            <div
              className="wow fadeInUp rounded-xl  bg-gray-100 px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2
                className={`${oswald.className} mb-6 text-3xl font-bold uppercase text-black dark:text-white md:text-4xl`}
              >
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Please fill out the form below to get started.
              </p>

              {/* Success/Error Alert */}
              {alert && (
                <Alert
                  type={alert.type}
                  message={alert.message}
                  onClose={closeAlert}
                />
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  {/* Full Name and Email */}
                  <div className="w-full px-4 md:w-1/2">
                    <Input
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      error={errors.fullName}
                    />
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      error={errors.email}
                    />
                  </div>

                  {/* Message */}
                  <div className="w-full px-4">
                    <Textarea
                      id="query"
                      name="query"
                      label="Have a question or query? We'd love to hear from you"
                      placeholder="Type your query here..."
                      rows={6}
                      value={formData.query}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      error={errors.query}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full rounded-lg bg-primary px-9 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 dark:shadow-submit-dark md:w-auto"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          SUBMITTING...
                        </span>
                      ) : (
                        "SUBMIT"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
