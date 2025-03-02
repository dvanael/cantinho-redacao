import React, { useEffect, useRef } from "react";

const Paragraph = ({ id, text, onTextChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; 
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={(e) => onTextChange(id, e.target.value)}
      className="paragraph-input"
      placeholder="Digite seu parágrafo..."
    />
  );
};

export default Paragraph;