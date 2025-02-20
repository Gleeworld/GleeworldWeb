import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const services = [
  {
    number: "01.",
    title: "Telepharmacy Services",
    description:
      "Receive expert healthcare advice from the comfort of your home. Consult remotely with licensed pharmacists and get the medications and guidance you need, skipping long wait times.",
    imageUrl: "/telepharmacy.png",
    buttonText: "Chat Now",
    buttonLink: "#",
  },
  {
    number: "02.",
    title: "Delivery Services",
    description:
      "Order medications for yourself, your family, or employees with ease. Our reliable delivery service ensures your medications arrive safely and promptly at your doorstep.",
    imageUrl: "/Delivery.png",
    buttonText: "Submit Order",
    buttonLink: "#",
  },
  {
    number: "03.",
    title: "Pharmaceutical Distribution",
    description:
      "We are a trusted partner for independent pharmacies across Nigeria. Our comprehensive pharmaceutical products help serve communities effectively.",
    imageUrl: "/Pharmacy.png",
    buttonText: "Submit Order",
    buttonLink: "#",
  },
  {
    number: "04.",
    title: "Technology Tools",
    description:
      "Elevate your pharmacy operations with our innovative technology tools. Our solutions help you manage inventory, streamline operations, and improve customer service.",
    imageUrl: "/technology.png",
    buttonText: "Check Now",
    buttonLink: "#",
  },
  {
    number: "05.",
    title: "Medfinder App(coming soon)",
    description:
      "Find what you need conveniently with the Medfinder app. Locate pharmacies, compare medicine prices, and order medications for delivery directly from your smartphone.",
    imageUrl: "/technology.png",
    buttonText: "Check Now",
    buttonLink: "#",
  },
];

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16 py-12">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesList;
