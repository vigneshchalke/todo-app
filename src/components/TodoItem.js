function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
      <li
        style={{
          margin: '10px 0',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: todo.completed ? '#d4edda' : '#f8d7da',
        }}
      >
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            flex: 1,
            marginLeft: '10px',
          }}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </span>
        <button
          onClick={() => deleteTodo(todo.id)}
          style={{
            padding: '5px 10px',
            border: 'none',
            backgroundColor: '#ffd700',
            color: 'black',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </li>
    );
  }
  
  export default TodoItem;
  