import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((element, index) => (
        <AccordionItem
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          key={index}
          title={element.title}
          number={index}
        >
          {element.text}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
