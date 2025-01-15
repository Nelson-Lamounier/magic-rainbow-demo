import { FC, useState } from "react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

interface AlertProps {
  message: string;
  type: "success" | "error" | "warn";
  onClose: () =>  void;
}


const Alert: FC<AlertProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`rounded-md p-4 ${
        type === "success"
          ? "bg-green-50"
          : type === "error"
          ? "bg-red-50"
          : "bg-yellow-50"
      }`} role="alert"
    >
      <div className="flex">
        <div className="shrink-0">
          <CheckCircleIcon
            aria-hidden="true"
            className="size-5 text-green-400"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
          {message}
          </p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
            onClick={handleClose}
              type="button"
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-hidden"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
