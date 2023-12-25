import React, { useState } from "react";

function AccordionItem({ number, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((c) => !c);
  }

  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleClick}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccordionItem;
