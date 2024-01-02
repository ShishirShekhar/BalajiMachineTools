const ActionButton = ({
  type = "primary",
  text = "Click Me",
  action = "default",
  value = "none",
  size = "medium",
}) => {
  let features = "bg-blue-500 text-white";
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
      features = "bg-blue-500 text-white";
      break;
    case "secondary":
      features = "border-2 border-blue-500 text-blue-500";
      break;
    default:
      features = "bg-blue-500 text-white";
      break;
  }

  const actionBlock = () => {
    if (action === "call") {
      return (
        <a href={`tel:0${value}`}>
          <button
            className={`w-full rounded-lg flex items-center justify-center transition hover:bg-blue-700 hover:text-white ${features} ${textSize} ${buttonSize}`}
          >
            {text}
          </button>
        </a>
      );
    } else if (action === "mail") {
      return (
        <a href={`mailto:${value}`}>
          <button
            className={`w-full rounded-lg flex items-center justify-center transition hover:bg-blue-700 hover:text-white ${features} ${textSize} ${buttonSize}`}
          >
            {text}
          </button>
        </a>
      );
    } else {
      <button
        className={`w-full bg-blue-500 rounded-lg text-white text-${textSize} p-2 flex items-center justify-center transition hover:bg-blue-700`}
      >
        {text}
      </button>;
    }
  };

  return <div>{actionBlock()}</div>;
};

export default ActionButton;