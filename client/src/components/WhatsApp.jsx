import whatsapp from "../images/whatsapp.png";

const WhatsApp = () => {
  return (
    <div className="fixed right-5 bottom-20 md:bottom-5 flex items-center">
      <a
        href={"https://wa.me/8437680240?text=Hello, I recently visited the Balaji Machine Tools website and had a question. Could you please help me with it?"}
        target="_blank"
        rel="noreferrer"
        className="absolute z-40"
      >
        <img
          src={whatsapp}
          alt="Whatsapp"
          className="w-16 h-16 object-cover"
        />
      </a>
      <div className="pulse"></div>
    </div>
  );
};

export default WhatsApp;
