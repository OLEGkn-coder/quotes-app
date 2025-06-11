import React, { useState } from 'react';
import QuoteForm from './quoteForm';
import { Quote } from '../types';

const initialQuotes: Quote[] = [
  { id: 1, author: 'Марк Аврелій', text: 'Задоволення, яке переходить межу, перетворюєься на покарання' },
  { id: 2, author: 'Ліна Костенко', text: 'Людина нібито не літає, а крила має.' }
];
const QuoteList: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState<Quote | null>(null);
  const [showForm, setShowForm] = useState(false);
const filteredQuotes = quotes.filter(q =>
    q.author.toLowerCase().includes(search.toLowerCase())
  );
 const handleAdd = (quote: Quote) => {
    setQuotes([...quotes, { ...quote, id: Date.now() }]);
   setShowForm(false);
  };
  const handleUpdate = (updated: Quote) => {
   setQuotes(quotes.map(q => (q.id === updated.id ? updated : q)));
    setEditing(null);
  };
const handleDelete = (id: number) => {
    if (window.confirm('Ви впевнені, що хочете видалити цитату?')) {
     setQuotes(quotes.filter(q => q.id !== id));
    }
  }; 
 return (
    <div>
      <input
        type="text"
       placeholder="Пошук за автор"
        value={search}
       onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setShowForm(true)}>Додати цитату</button>
      {showForm && <QuoteForm onSave={handleAdd} onCancel={() => setShowForm(false)} />}
     {editing && (
        <QuoteForm
          quote={editing}
         onSave={handleUpdate}
         onCancel={() => setEditing(null)}
        />
      )}
      <ul>
        {filteredQuotes.map(q => (
         <li key={q.id}>
           <strong>{q.author}:</strong> {q.text}
            <button onClick={() => setEditing(q)}>Редагувати</button>
           <button onClick={() => handleDelete(q.id)}>Видалити</button>
         </li>
        ))}
     </ul>
    </div>
  );
};

export default QuoteList;