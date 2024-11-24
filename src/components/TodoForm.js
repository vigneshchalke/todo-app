import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', marginRight: '10px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
