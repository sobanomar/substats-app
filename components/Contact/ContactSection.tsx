"use client";

import { oswald } from "@/utils/fonts";
import { ChevronDown } from "lucide-react";
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
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        {...props}
      />
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
        className="w-full resize-none rounded-lg border border-stroke bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        {...props}
      />
    </div>
  );
};

const ContactSection = () => {
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
              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* First Name and Last Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <Input
                      id="fullName"
                      name="fullName"
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  {/* <div className="w-full px-4 md:w-1/2">
                    <Input
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div> */}

                  {/* Email and Phone */}
                  <div className="w-full px-4 md:w-1/2">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      label="Email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  {/* <div className="w-full px-4 md:w-1/2">
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      label="Phone"
                      placeholder="Enter your phone number"
                    />
                  </div> */}

                  {/* Message */}
                  <div className="w-full px-4">
                    <Textarea
                      id="query"
                      name="query"
                      label="Have a question or query? We'd love to hear from you"
                      placeholder="Type your query here..."
                      rows={6}
                    />
                  </div>

                  {/* Are you? and Instagram Profile */}
                  {/* <div className="w-full px-4 md:w-1/2">
                    <Dropdown
                      id="category"
                      name="category"
                      label="Are you?"
                      options={categoryOptions}
                    />
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <Input
                      id="instagram"
                      name="instagram"
                      label="Instagram Profile"
                      placeholder="Add your handle"
                    />
                  </div> */}

                  {/* Services Requested and Competitor Profile */}
                  {/* <div className="w-full px-4 md:w-1/2">
                    <Dropdown
                      id="services"
                      name="services"
                      label="Services Requested?"
                      options={serviceOptions}
                    />
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <Input
                      id="competitorProfile"
                      name="competitorProfile"
                      label="Competitor Profile (Smoothcomp, AGF, FUJI, ETC)"
                      placeholder="Profile Links"
                    />
                  </div> */}

                  {/* Submit Button */}
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-9 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark md:w-auto"
                    >
                      SUBMIT
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
