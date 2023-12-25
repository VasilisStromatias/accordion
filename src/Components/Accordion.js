import React from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          key={index}
          title={element.title}
          text={element.text}
          number={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
