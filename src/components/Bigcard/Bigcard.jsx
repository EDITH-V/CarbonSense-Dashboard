import React from "react";
import "./Cards.css";
import { Bigcard } from "../../Data/Data";

import Card from "../Card/Card";

const Bigcards = () => {
  return (
    <div className="Cards-big">
      {Bigcard.map((card, id) => {
        return (
          <div className="parentContainer-big" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Bigcards;
