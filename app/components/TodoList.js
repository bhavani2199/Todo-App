import TodoItem from './TodoItem.js';

export default function TodoList({ todos, deleteTodo }) {
  if (!todos.length) return <p>No activity yet!</p>;
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
