import React from "react";
import HeaderPortfolio from "../../Components/Header/HeaderPortfolio";
import Introduction from "../Introduction/Introduction";
import PortfolioItem from "./Portfolio_Item/PortfolioItem";
import Footer from "../../Components/Footer/Footer";

function Portfolio() {
  return (
    <>
      <HeaderPortfolio />
      <Introduction />
      <PortfolioItem />
      <Footer />
    </>
  );
}

export default Portfolio;
