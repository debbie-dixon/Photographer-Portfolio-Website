import ServiceCard from "./ServiceCard";
import image from "../assets/image4.jpg";
import image2 from "../assets/image6.jpg";
import image3 from "../assets/image5.jpg";
import Header from "./Header";

export default function Services() {
  const myServices = [
    {
      title: "Service",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minima dolor veniam quisquam quibusdam quasi ipsa rem ad, pariatur cum accusamus.",
      image: image,
    },
    {
      title: "Service",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minima dolor veniam quisquam quibusdam quasi ipsa rem ad, pariatur cum accusamus.",
      image: image2, // Temporarily reuse the same image to test!
    },
    {
      title: "Service",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minima dolor veniam quisquam quibusdam quasi ipsa rem ad, pariatur cum accusamus.",
      image: image3, // Temporarily reuse the same image to test!
    },
  ];
  return (
    <>
      <Header text="Our Services" id="services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8 mb-8 gap-8 sm:gap-4">
        {myServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            link="#contact"
          />
        ))}
      </div>
    </>
  );
}
