"use client";

import React, { useState } from "react";
import { contactFormConfig } from "@/types/contact-form";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface TouchedField {
  name: boolean;
  phone: boolean;
  email: boolean;
  message: boolean;
}

interface ErrorText {
  name: string;
  phone: string;
  email: string;
  message: string;
  result: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [touchedField, setTouchedField] = useState<TouchedField>({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const [errorText, setErrorText] = useState<ErrorText>({
    name: "",
    phone: "",
    email: "",
    message: "",
    result: "",
  });

  const [resultText, setResultText] = useState("");

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return value
          ? /^[a-zA-Z\s]+$/.test(value)
            ? ""
            : "Name should contain only letters."
          : "Name is required.";
      case "phone":
        return value
          ? /^\d{10}$/.test(value)
            ? ""
            : "Phone number must be 10 digits."
          : "Phone number is required.";
      case "email":
        return value
          ? /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
            ? ""
            : "Please enter a valid email address."
          : "Email is required.";
      case "message":
        return value
          ? value.length >= 10
            ? ""
            : "Message must be at least 10 characters long."
          : "Message is required.";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorText({
      ...errorText,
      [name]: validateField(name as keyof FormData, value),
    });
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouchedField({ ...touchedField, [name]: true });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    if (!formData[name as keyof FormData]) {
      setTouchedField({ ...touchedField, [name]: false });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const phoneError = validateField("phone", formData.phone);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || phoneError || emailError || messageError) {
      setErrorText({
        name: nameError,
        phone: phoneError,
        email: emailError,
        message: messageError,
        result: "",
      });
      setResultText("");
      return;
    }
  };

  return (
    <section
      id="contact"
      className="w-full h-screen bg-gray-300 flex justify-center items-center"
    >
      <div className="w-[80%]  h-[80%] flex bg-white shadow-[0_3rem_7rem_rgba(0,0,0,0.5)]">
        <div
          className="w-[35%] bg-cover bg-center bg-no-repeat below-md:hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.6), rgba(22, 22, 22, 0.9)), url(${contactFormConfig.imageUrl})`,
          }}
        ></div>
        <div className="w-[65%] bg-[#e9e9e9] p-12 pt-12 pb-40 below-md:w-[100%] ">
          <h1 className="font-sans text-[4rem] below-md:text-[2.5rem] font-extralight text-[#262626] mb-20 text-center">
            {contactFormConfig.heading}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.entries(contactFormConfig.fields).map(([key, field]) => (
              <div key={key} className="flex flex-col">
                {field.type === "textarea" ? (
                  <textarea
                    name={key}
                    className=" bg-transparent border-b-2 border-dashed border-gray-700 px-0 py-4 text-[1.6rem] text-[#4b4b4b] font-serif outline-none transition-colors duration-300 ease-in-out focus:border-gray-700"
                    value={formData[key as keyof FormData]}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={key}
                    className=" bg-transparent border-b-2 border-dashed border-gray-700  px-0  text-[1.6rem] text-[#4b4b4b] font-serif outline-none transition-colors duration-300 ease-in-out focus:border-gray-700"
                    value={formData[key as keyof FormData]}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                )}
                {errorText[key as keyof ErrorText] && (
                  <p className="text-red-500 text-sm">
                    {errorText[key as keyof ErrorText]}
                  </p>
                )}
              </div>
            ))}
            <div className="relative h-full">

            <button
              type="submit"
              className="w-[100%] h-[4rem] bg-gray-800 text-white font-serif text-[1.5rem] tracking-[1.5rem] uppercase border-none cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            >
              {contactFormConfig.submitButtonText}
            </button>
            </div>
            {errorText.result && (
              <p className="text-red-500 mt-4">{errorText.result}</p>
            )}
            {resultText && <p className="text-green-500 mt-4">{resultText}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
