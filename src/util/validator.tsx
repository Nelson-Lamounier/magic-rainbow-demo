export const validateField = (name: string, value: string): string => {
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