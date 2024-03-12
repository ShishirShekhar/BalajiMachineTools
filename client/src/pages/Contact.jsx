import React from "react";
import ActionButton from "../components/ActionButton";

const Contact = () => {
  return (
    <div className="p-5 md:p-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-semibold mb-6 md:mb-10">
          Contact Details
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-6 md:w-1/2">
            <div>
              <p className="text-2xl">Address:</p>
              <p className="text-xl">G.T Road, Batala 143505, Punjab, India</p>
            </div>
            <div className="flex flex-col gap-2">
              <ActionButton
                type="secondary"
                text="Call Us 1"
                action="call"
                value={8437680240}
                size="medium"
              />
              <ActionButton
                type="secondary"
                text="Call Us 2"
                action="call"
                value={9814415150}
                size="medium"
              />
              <ActionButton
                type="secondary"
                text="WhatsApp"
                action="whatsapp"
                value={
                  "Hello, I recently visited the Balaji Machine Tools website and had a question. Could you please help me with it?"
                }
                size="medium"
              />
              <ActionButton
                type="secondary"
                text="Email Us"
                action="mail"
                value="salesbalajimachines@gmail.com"
                size="medium"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <iframe
              title="Balaji Machine Tools"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.2581442302503!2d75.19921797619476!3d31.817962374079247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391bc2f5df8080f9%3A0x494170b7cc27e970!2sGT%20Rd%2C%20Batala%2C%20Punjab%20143505!5e0!3m2!1sen!2sin!4v1704193994950!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[26rem] w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
