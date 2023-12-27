import React, { useState } from "react";

function AccordionItem({ number, title, children, curOpen, setCurOpen }) {
  const isOpen = number === curOpen;

  function handleClick() {
    setCurOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : " "}`} onClick={handleClick}>
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

export default AccordionItem;
