import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AdCards from "./AdCards";

class App extends Component {
  render() {
   
    return (
      <>
        <Header />
        <h4 className="text-bg-danger justify-content-center">
          Marketplace UI
        </h4>

        <div class="container mt-5">
          <h2>Ad List</h2>
          <div class="row">
          <AdCards />
          </div>
         
          
        </div>


        <Footer />
      </>
    );
  }
}

export default App;
