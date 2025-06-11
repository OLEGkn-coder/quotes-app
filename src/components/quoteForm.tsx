import React, { useState } from 'react';
import { Quote } from '../types';
type Props = {
 quote?: Quote;
 onSave: (quote: Quote) => void;
 onCancel: () => void;
};
const QuoteForm: React.FC<Props> = ({ quote, onSave, onCancel }) => {
 const [author, setAuthor] = useState(quote?.author || '');
const [text, setText] = useState(quote?.text || '');

const isValid = author.trim() && text.trim();

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!isValid) return;
   onSave({ id: quote?.id || 0, author, text });
};
return (
 <form onSubmit={handleSubmit}>
  <input
  type="text"
   value={author}
   maxLength={200}
   onChange={(e) => setAuthor(e.target.value)}
    placeholder="Автор"
  />
  <textarea
 value={text}
 maxLength={1000}
 onChange={(e) => setText(e.target.value)}
  placeholder="Цитата"
   ></textarea>
     <button type="submit" disabled={!isValid}>
      Зберегти
     </button>
     <button type="button" onClick={onCancel}>
     Скасувати
     </button>
</form>
);
};
export default QuoteForm;