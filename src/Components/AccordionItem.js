import React from "react";

function AccordionItem({ number, title, text }) {
  return (
    <div className="item">
      <p className="number">{number}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
}

export default AccordionItem;
