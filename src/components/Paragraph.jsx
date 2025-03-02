import React from "react";

const Paragraph = ({ id, text, onTextChange }) => (
  <input
    type="text"
    value={text}
    onChange={(e) => onTextChange(id, e.target.value)}
    className="paragraph-input"
    placeholder="Digite seu parágrafo..."
  />
);

export default Paragraph;