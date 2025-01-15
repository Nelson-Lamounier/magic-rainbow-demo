"use client";

import { FC, FormEvent, useState } from "react";
import { useForm } from "@/hooks/use-form";
import { validateField } from "@/util/validator";
import { FormInput } from "@/components/form/form-input";
import { FormTextarea } from "@/components/form/form-text";
import { contactFormConfig } from "@/types/contact-form";
import Alert from "./alert";
import axios from "axios";

import WithAnimation from "@/util/animation";

const messages = {
  success: "Successfully uploaded",
  error: "An error occurred while uploading",
  warn: "Please check your input and try again",
};

const ContactForm: FC = () => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const [alertType, setAlertType] = useState<
    "success" | "error" | "warn" | null
  >(null);
  const { formData, errors, handleChange, handleBlur, resetForm } = useForm(
    initialState,
    validateField
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors = Object.keys(formData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: validateField(
          key as keyof typeof formData,
          formData[key as keyof typeof formData]
        ),
      }),
      {}
    );

    if (Object.values(newErrors).some((error) => error)) {
      console.log("Validation Errors:", newErrors);
      return;
    }

    try {
      const response = await axios.post("/api/send-email", formData);

      if (response.status === 200) {
        console.log("Email sent successfully:", response.data);
        resetForm(); // Ensure this doesn't throw
        setAlertType("success");
      } else {
        console.error("Failed to send email:", response.data);
        setAlertType("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlertType("warn");
    }
  };

  const handleCloseAlert = () => {
    setAlertType(null);
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
        <div className="w-[65%] bg-[#e9e9e9] relative p-12 pt-12 pb-40 below-md:w-[100%] ">
          <h1 className="font-sans text-[2.5rem] below-md:text-[2.5rem] font-extralight text-[#262626] mb-20 text-center">
            {contactFormConfig.heading}
          </h1>
        <WithAnimation>

          <form onSubmit={handleSubmit} className="flex flex-col flex-grow space-y-6">
            <FormInput
              name="name"
              type="text"
              value={formData.name}
              placeholder="Your Name"
              error={errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormInput
              name="email"
              type="email"
              value={formData.email}
              placeholder="Your Email"
              error={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormInput
              name="phone"
              type="text"
              value={formData.phone}
              placeholder="Your Phone Number"
              error={errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FormTextarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              error={errors.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {/* Conditionally render alert comonents */}
            {alertType && (
              <Alert
                type={alertType}
                message={messages[alertType]} // Dynamically fetch the message
                onClose={handleCloseAlert} // Handle alert close
              />
            )}
          </form>
          </WithAnimation>
          <button
              type="submit"
              className="w-[90%] items-center absolute bottom-4  h-[3rem] bg-gray-800  text-white font-serif text-[1.5rem] uppercase border-none cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            >
              {contactFormConfig.submitButtonText}
            </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

