import React, { useState } from "react";
import Paragraph from "./Paragraph";

const useParagraphs = (initialState = []) => {
  const [paragraphs, setParagraphs] = useState(initialState);

  const addParagraph = () => {
    if (paragraphs.length < 4) {
      setParagraphs([...paragraphs, { id: Date.now(), text: "" }]);
    }
  };

  const updateParagraphText = (id, newText) => {
    setParagraphs(paragraphs.map(p => p.id === id ? { ...p, text: newText } : p));
  };

  return { paragraphs, addParagraph, updateParagraphText };
};

const DraftEditor = () => {
  const { paragraphs, addParagraph, updateParagraphText } = useParagraphs([]);
  const [savedParagraphs, setSavedParagraphs] = useState([]);

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
        <div className="btn-container">
          <button className="btn" onClick={addParagraph} disabled={paragraphs.length >= 4} aria-label="Adicionar Parágrafo">
            {paragraphs.length >= 4 ? "Limite Parágrafos Alcançado" : "Adicionar Parágrafo"}
          </button>
          <button className="btn" onClick={saveDraft} disabled={paragraphs.length === 0} aria-label="Salvar Rascunho">
            Salvar Rascunho
          </button>
        </div>
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