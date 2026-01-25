import whatsapp from "../../images/whatsapp.png";

const WhatsApp = () => {
  return (
    <div className="fixed right-5 bottom-20 z-40 flex items-center md:bottom-5">
      <div className="pulse"></div>
      <a
        href={
          "https://wa.me/8437680240?text=Hello, I recently visited the Balaji Machine Tools website and had a question. Could you please help me with it?"
        }
        target="_blank"
        rel="noreferrer"
        className="absolute z-50"
      >
        <img src={whatsapp} alt="Whatsapp" className="h-16 w-16 object-cover" />
      </a>
    </div>
  );
};

export default WhatsApp;
