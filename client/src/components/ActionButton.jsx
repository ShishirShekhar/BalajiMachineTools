import React from "react";
import { Link } from "react-router-dom";

const ActionButton = ({
  type = "primary",
  text = "Click Me",
  action = "default",
  value = "none",
  size = "medium",
}) => {
  let buttonStyles =
    "w-full rounded-lg flex items-center justify-center transition hover:bg-blue-700 hover:text-white";
  let textSize = "text-md";
  let buttonSize = "p-2";

  switch (size) {
    case "small":
      textSize = "text-sm";
      buttonSize = "p-1";
      break;
    case "medium":
      textSize = "text-md";
      buttonSize = "p-2";
      break;
    case "large":
      textSize = "text-xl";
      buttonSize = "p-4";
      break;
    default:
      textSize = "text-md";
      buttonSize = "p-2";
      break;
  }

  switch (type) {
    case "primary":
      buttonStyles += " bg-blue-500 text-white";
      break;
    case "secondary":
      buttonStyles += " border-2 border-blue-500 text-blue-500";
      break;
    default:
      buttonStyles += " bg-blue-500 text-white";
      break;
  }

  const renderActionButton = () => {
    switch (action) {
      case "call":
        return (
          <a href={`tel:${value}`}>
            <button className={buttonStyles + ` ${textSize} ${buttonSize}`}>
              {text}
            </button>
          </a>
        );

      case "mail":
        return (
          <a href={`mailto:${value}`}>
            <button className={buttonStyles + ` ${textSize} ${buttonSize}`}>
              {text}
            </button>
          </a>
        );

      case "whatsapp":
        return (
          <a
            href={`https://wa.me/8437680240?text=${value}`}
            target="_blank"
            rel="noreferrer"
            className="w-full"
          >
            <button className={buttonStyles + ` ${textSize} ${buttonSize}`}>
              {text}
            </button>
          </a>
        );

      case "link":
        return (
          <Link to={value}>
            <button className={buttonStyles + ` ${textSize} ${buttonSize}`}>
              {text}
            </button>
          </Link>
        );

      default:
        return (
          <button className={`${buttonStyles} ${textSize} ${buttonSize}`}>
            {text}
          </button>
        );
    }
  };

  return <div className="w-full">{renderActionButton()}</div>;
};

export default ActionButton;
