"use client";

import {FC, FormEvent} from "react";
import { useForm }from "@/hooks/use-form";
import { validateField } from "@/util/validator";
import { FormInput } from "@/components/form-input";
import {FormTextarea} from "@/components/form-text";
import { contactFormConfig } from "@/types/contact-form";
import axios from "axios";

const ContactForm: FC = () => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  const { formData, errors, handleChange, handleBlur, resetForm  } = useForm(initialState, validateField);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    const newErrors = Object.keys(formData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: validateField(key as keyof typeof formData, formData[key as keyof typeof formData]),
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
        resetForm(); // Clear form fields
        alert("Your message has been sent successfully!");
      } else {
        console.error("Failed to send email:", response.data);
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
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
          <h1 className="font-sans text-[2.5rem] below-md:text-[2.5rem] font-extralight text-[#262626] mb-20 text-center">
            {contactFormConfig.heading}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <button
              type="submit"
              className="w-full h-10 bg-gray-800 text-white font-serif text-lg uppercase border-none cursor-pointer transition-colors duration-300 hover:bg-gray-700"
            >
              {contactFormConfig.submitButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

function resetForm() {
  throw new Error("Function not implemented.");
}
