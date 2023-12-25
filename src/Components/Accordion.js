import React from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((element) => (
        <AccordionItem title={element.title} text={element.text} />
      ))}
    </div>
  );
}

export default Accordion;
