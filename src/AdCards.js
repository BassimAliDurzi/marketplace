import React from "react";
import Advertisement from "./Advertisement";

const AdCards = () => {
  const adList = [
    {
      title: "Olive Oil",
      description: "🇵🇸 Rumi (PALESTINE) Extra Virgin Olive Oil",
      contact: "Contact",
      image: "ad1.png",
    },
    {
      title: "Dried Za'atar Leaves (THYME)",
      description: "Premium Palestinian Dried Za'atar Leaves (THYME)",
      contact: "Contact",
      image: "ad2.png",
    },
    {
      title: "MAFTOUL",
      description: "Palestinian GIANT COUSCOUS MAFTOUL",
      image: "ad3.png",
    },
    {
      title: "Nabulsi Soap",
      description: "Palestinian Premium Nabulsi Soap",
      contact: "Contact",
      image: "ad4.png",
    },
    {
      title: "Medjool Dates",
      description: "Palestinian Medjool Dates ",
      contact: "Contact",
      image: "ad5.png",
    },
    {
      title: "Green olives",
      description: "340g Palestinian pickled green olives ",
      contact: "Contact",
      image: "ad6.png",
    },
  ];

  return (
    <>
      {adList.map((ad) => (
        <Advertisement
          image={ad.image}
          title={ad.title}
          description={ad.description}
          contact={ad.contact}
          onDetailsClick={() => console.log("Details clicked")}
        />
      ))}
    </>
  );
};

export default AdCards;
