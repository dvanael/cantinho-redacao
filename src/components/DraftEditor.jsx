import React, { useState } from "react";
import Paragraph from "./Paragraph";

const DraftEditor = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [savedParagraphs, setSavedParagraphs] = useState([]);

  const addParagraph = () => {
    if (paragraphs.length < 4) {
      setParagraphs([...paragraphs, { id: Date.now(), text: "" }]);
    }
  };

  const updateParagraphText = (id, newText) => {
    setParagraphs(paragraphs.map(p => p.id === id ? { ...p, text: newText } : p));
  };

  const saveDraft = () => {
    setSavedParagraphs([...paragraphs]);
  };

  return (
    <div className="editor-container">
      <div className="draft-container">
        <h2>Editar Rascunho</h2>
        {paragraphs.map(p => (
          <Paragraph key={p.id} id={p.id} text={p.text} onTextChange={updateParagraphText} />
        ))}
        <button onClick={addParagraph} disabled={paragraphs.length >= 4}>Adicionar Parágrafo</button>
        <button onClick={saveDraft} disabled={paragraphs.length === 0}>Salvar Rascunho</button>
      </div>

      <div className="saved-draft">
        <h2>Meu Rascunho</h2>
        {savedParagraphs.map((p, index) => (
          <div key={p.id} className="paragraph-view">
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DraftEditor;