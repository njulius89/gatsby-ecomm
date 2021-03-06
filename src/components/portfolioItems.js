import React from "react";
import CardRetro from "./cardRetro";
import PortfolioItemFront from "./portfolioItemFront";
import PorfolioItemBack from "./porfolioItemBack";
import portfolioData from "../data/portfolioData";

const PortfolioItems = () => (
  <>
    {portfolioData.map(i => (
      <CardRetro className={"flipCardRetro"} key={i.id}>
        <div className="flip-card-inner">
          <PortfolioItemFront Title={i.title} Tech={i.tech} />
          <PorfolioItemBack
            Link={i.link}
            LinkTitle={i.linkTitle}
            ImgSrc={i.imgSrc}
          />
        </div>
      </CardRetro>
    ))}
  </>
);

export default PortfolioItems;
