import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AdCards from "./AdCards";

class App extends Component {
  render() {
    const adsGroupe1 = [
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
    ];

    const adsGroupe2 = [
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
        <Header />
        <h4 className="text-bg-danger justify-content-center">
          Marketplace UI
        </h4>

        <div class="container mt-3">
          <ul class="list-group list-group-horizontal">
            {adsGroupe1.map((ad, index) => (
              <AdCards
                key={index}
                {...ad}
                onDetailsClick={() => console.log("Details clicked")}
              />
            ))}
          </ul>
        </div>

        <div class="container mt-3">
          <ul class="list-group list-group-horizontal">
            {adsGroupe2.map((ad, index) => (
              <AdCards
                key={index}
                {...ad}
                onDetailsClick={() => console.log("Details clicked")}
              />
            ))}
          </ul>
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
