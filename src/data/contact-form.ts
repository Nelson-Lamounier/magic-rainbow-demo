// Define the type for a single field
interface FormField {
    label: string;
    type: "text" | "tel" | "email" | "textarea";
    placeholder: string;
  }
  
  // Define the type for all fields
  interface FormFields {
    name: FormField;
    phone: FormField;
    email: FormField;
    message: FormField;
  }
  
  // Define the type for the entire form configuration
  interface ContactFormConfig {
    heading: string;
    fields: FormFields;
    submitButtonText: string;
    imageUrl: string;
  }

  export const contactFormConfig: ContactFormConfig = {
    heading: "Request a Quote",
    imageUrl: "https://magic-rainbow-app-01.s3.eu-west-1.amazonaws.com/contact-form-img/contact-form-img.jpg",
    fields: {
      name: {
        label: "Full Name",
        type: "text",
        placeholder: "Enter your name",
      },
      phone: {
        label: "Phone",
        type: "tel",
        placeholder: "Enter your phone number",
      },
      email: {
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
      },
      message: {
        label: "Message",
        type: "textarea",
        placeholder: "Write your message here",
      },
    },
    submitButtonText: "Submit",
  };